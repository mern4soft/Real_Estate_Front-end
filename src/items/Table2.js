
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,

} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";
import axios from "axios";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

export default function SortableTable({
  TABLE_ROWS,
  TABLE_HEAD,
  TABLE_BUTTON,
  TABLE_HEADING,
}) {

  const [propertyData, setPropertyData] = useState({
    propertyName: '',
    holderName: '',
    propertyImage: '',
    propertyPrice: '',
    propertyAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData, [name]: value,
    });
  };





  const handleSubmit = async () => {
    try {

      const response = await axios.post('https://real-estate-backend-1-6bdi.onrender.com/createtypeofprop', propertyData);
      console.log('API Response:', response.data);
      handleOpen();

    } catch (error) {

      console.error('Error:', error.message);

    }
  };












  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);



  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Slice the rows array to get the items for the current page
  const displayedRows = TABLE_ROWS.slice(startIndex, endIndex);

  // Total number of pages
  const totalPages = Math.ceil(TABLE_ROWS.length / ITEMS_PER_PAGE);

  // Handler for changing the current page
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };



  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              {TABLE_HEADING?.map((items) => (
                <Typography variant="h5" color="blue-gray" key={items}>
                  {items}
                </Typography>
              ))}
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              {TABLE_BUTTON?.map((item) => (
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  onClick={handleOpen}
                  key={item}
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> {item}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS?.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD?.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedRows?.map(
                ({ img, name, email, job, org, online, date }, index) => {
                  const isLast = index === displayedRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {job}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {org}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={online ? "online" : "offline"}
                            color={online ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Long Dialog</DialogHeader>
        <DialogBody className="h-[42rem] overflow-scroll">
          <Typography className="font-normal">
            <form >
              <label htmlFor="propertyName">Property Name</label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                value={propertyData.propertyName}
                onChange={handleInputChange}
              />
              <label htmlFor="holderName">Property Holder Name</label>
              <input
                type="text"
                id="holderName"
                name="holderName"
                value={propertyData.holderName}
                onChange={handleInputChange}
              />
              <label htmlFor="propertyImage">Property Image</label>
              <input
                type="file"
                id="propertyImage"
                name="propertyImage"
                onChange={handleInputChange}
              />
              <label htmlFor="propertyPrice">Property Price</label>
              <input
                type="number"
                id="propertyPrice"
                name="propertyPrice"
                value={propertyData.propertyPrice}
                onChange={handleInputChange}
              />
              <label htmlFor="propertyAddress">Property Address</label>
              <textarea
                name="propertyAddress"
                id="propertyAddress"
                cols="30"
                rows="10"
                value={propertyData.propertyAddress}
                onChange={handleInputChange}
              ></textarea>

            </form>
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            confirm
          </Button>
        </DialogFooter>
      </Dialog>

    </>

  );
}
