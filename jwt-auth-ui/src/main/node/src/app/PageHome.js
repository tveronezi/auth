import React, {useState} from "react";
import Loading from "./Loading";
import classNames from "classnames";
import jss from "./PageHome.jss";
import rest from "../Rest";
import SessionsTable from "./SessionsTable";
import SessionTest, {TITLE as testTitle} from "./SessionTest";
import KeyIcon from "@material-ui/icons/VpnKey";
import Fab from "@material-ui/core/Fab";

const initPageSize = 25;
const initPage = 0;
rest.getSessions(initPage + 1, initPageSize);

const PageHome = ({classes}) => {
    const [pageSize, setPageSize] = useState(initPageSize);
    const [page, setPage] = useState(initPage);
    const [testOpen, setTestOpen] = useState(false);

    const handleChangePage = (newPage) => {
        if (newPage !== page) {
            setPage(newPage);
            rest.getSessions(newPage + 1, pageSize);
        }
    };

    const handleChangeRowsPerPage = (newPageSize) => {
        if (newPageSize !== pageSize) {
            setPageSize(newPageSize);
            rest.getSessions(page + 1, newPageSize);
        }
    };

    const onCloseTest = () => {
        setTestOpen(false);
    };

    const onOpenTest = () => {
        setTestOpen(true);
    };

    const onAuthenticate = (name, password) => {
        rest.authenticate(name, password).then(() => {
            rest.getSessions(page + 1, pageSize);
        });
    };

    return (
        <div className={classNames(classes.root)}>
            <Loading/>
            <SessionTest
                open={testOpen}
                onClose={() => onCloseTest()}
                onAuthenticate={(name, password) => onAuthenticate(name, password)}/>
            <SessionsTable
                handleChangeRowsPerPage={(newPageSize) => handleChangeRowsPerPage(newPageSize)}
                handleChangePage={(newPage) => handleChangePage(newPage)}
                rowsPerPage={pageSize}
            />
            <Fab color="primary" aria-label={testTitle} className={classes.testIcon}
                 onClick={() => onOpenTest()}>
                <KeyIcon/>
            </Fab>
        </div>
    );

};

export default jss(PageHome);
