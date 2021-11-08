import { useContext } from 'react'
import Top5Item from './Top5Item.js'
import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import { GlobalStoreContext } from '../store/index.js'
import Image from './ourlist.jpg'
/*
    This React component lets us edit a loaded list, which only
    happens when we are on the proper route.
    
    @author McKilla Gorilla
*/
function WorkspaceScreen() {
    const { store } = useContext(GlobalStoreContext);

    let card = null;

    let editItems = "";
    if (store.currentList) {
        editItems = 
            <List id="edit-items" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    store.currentList.items.map((item, index) => (
                        <Top5Item 
                            key={'top5-item-' + (index+1)}
                            text={item}
                            index={index} 
                        />
                    ))
                }
            </List>;
        card = <div id="top5-workspace">
            <div id="workspace-edit">
                <div id="edit-numbering">
                    <div className="item-number"><Typography variant="h3">1.</Typography></div>
                    <div className="item-number"><Typography variant="h3">2.</Typography></div>
                    <div className="item-number"><Typography variant="h3">3.</Typography></div>
                    <div className="item-number"><Typography variant="h3">4.</Typography></div>
                    <div className="item-number"><Typography variant="h3">5.</Typography></div>
                </div>
                {editItems}
            </div>
        </div>
    }
    else if (!store.currentList && !store.unauthorizedList) {
        let id = window.location.pathname.substring(10);
        store.setCurrentList(id);
    }
    else if(store.unauthorizedList) {
        card =
        <div id="top5-workspace">
            <div id="workspace-edit">
                <Grid
                    item
                    width={636}
                    height={392}
                    sx={{
                        backgroundImage: `url(${Image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    marginLeft="auto"
                    marginRight="auto"
                />
                <Alert severity="error"
                       height="auto">
                    <strong>Unauthorized to access this list.</strong>
                </Alert>
            </div>
        </div>;
    }
    
    return card;
}

export default WorkspaceScreen;