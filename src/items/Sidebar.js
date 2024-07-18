import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix
} from "@material-tailwind/react";
import '../pages/Land.css'

import { Link } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";

export default function Sidebar({ SidebarData }) {
    return (
        <Card className="h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl bg-blue-gray-400 shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <div className="libre-barcode-39-text-regular text-3xl text-center text-white font-extrabold" variant="h5" color="blue-gray" >
                    ReelS8
                </div>
            </div> 

            {
                SidebarData.map((item, index) => (

                    <List key={item.id} className="pt-6">
                        <Link to={item.link}>
                            <ListItem className="hover:bg-deep-orange-300 text-white">
                                <ListItemPrefix >
                                    {item.icons}
                                </ListItemPrefix>
                                {item.name}
                            </ListItem>
                        </Link>
                    </List>

                ))
            }

        </Card>
    );
}