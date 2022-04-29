import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Service from "./Service"
import Profiles from "./Profiles"
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SendIcon from '@material-ui/icons/Send';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
const routeArray = [
  {
    path: "/",
    component: <Home />,
    Title: "Inbox",
    icon:<InboxOutlinedIcon/>
  },
  {
    path: "/about",
    component: <About/>,
    Title: "Starred",
    icon:<StarOutlinedIcon/>

  },

  {
    path: "/contact",
    component: <Contact />,
    Title: "Snoozed",
    icon:<AccessTimeOutlinedIcon/>
  },
  {
    path: "/service",
    component: <Service/>,
    Title: "Sent",
    icon:<SendIcon/>
  },
  {
    path: "/profiles",
    component: <Profiles />,
    Title: "Drafts",
    icon:<InsertDriveFileIcon/>
  },
];

export default routeArray;
