import React, { useEffect, useState } from "react";
import { Text, Image, Box, SimpleGrid, Flex, Center } from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { AddData, GetData, UpdateData, count } from "../../redux/slices/action";
import UserModal from "./AddUserModal";
import UpdateUserModal from "./UpdateUserModal";

const SecondTask = () => {
  const details = {
    image: "",
    name: "",
    field: "",
    position: "",
    EmployeType: "",
  };
  const [data, setData] = useState(details);
  const dispatch = useDispatch();
  var [updateData, setUpdateData] = useState([]);
  const {
    data: employeDetails,
    Apicounts,
    loading,
  } = useSelector((employedata) => {
    return employedata.Data;
  }, shallowEqual);
  useEffect(() => {
    dispatch(GetData()).then((res) => {
      setUpdateData(res.payload);
      dispatch(count());
    });
  }, []);

  //FUNCTION TO UPDATE THE USER DETAILS FRONTEND SIDE
  function handleUpdatedata(e, id) {
    const newupdateddata = updateData.map((ele) => {
      if (ele._id == id) {
        const newupdateddata = { ...ele, [e.target.name]: e.target.value };
        setData(newupdateddata);
        return newupdateddata;
      } else {
        return ele;
      }
    });
    setUpdateData(newupdateddata);
  }

  //function to add the user details frontend side
  const handleChange = (e) => {
    if (e == "Full time" || e === "Intern" || e === "Part time") {
      setData({ ...data, EmployeType: e });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  //function to dispatch the user details
  const handleSubmit = (e, identifier, id, onClose) => {
    if (!identifier) {
      dispatch(AddData(data)).then(() => {
        dispatch(GetData()).then((res) => {
          setUpdateData(res.payload);
        });
        dispatch(count());
      });
    } else {
      dispatch(UpdateData({ id, data })).then(() => {
        dispatch(count());
        onClose();
      });
    }
    setData(details);
  };
  return (
    <>
      <Flex
        gap={20}
        w={"85%"}
        p={2}
        m={"auto"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Text>Add api Count : {Apicounts.addCount}</Text>
        <Text>Update api Count: {Apicounts.updateCount}</Text>
        <UserModal
          data={data}
          text={"Add"}
          setData={setData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Flex>
      <SimpleGrid columns={[1, 2, 5]} spacing="30px" w={"90%"} m={"auto"}>
        {loading ? (
          <Text>Loading</Text>
        ) : (
          updateData?.map((ele) => (
            <Box
              boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
              textAlign={"center"}
              p={2}
              key={ele._id}
              borderRadius={10}
            >
              <Image src={ele.image} h={"40%"} w={"100%"} borderRadius={5} />

              <Text mt={2}>{ele.name}</Text>
              <Text>{ele.field}</Text>
              <Text>{ele.position}</Text>
              <Text>{ele.EmployeType}</Text>
              <UpdateUserModal
                text={"Update"}
                data={ele}
                handleChange={handleUpdatedata}
                handleSubmit={handleSubmit}
              />
            </Box>
          ))
        )}
      </SimpleGrid>
    </>
  );
};

export default SecondTask;
