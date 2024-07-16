import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";

export default function Sidebar({ SidebarData }) {
    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    ReelS8
                </Typography>
            </div>

            {
                SidebarData.map((item, index) => (

                    <List key={item.id} className="pt-6">
                        <Link to={item.link}>
                            <ListItem>
                                <ListItemPrefix>
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