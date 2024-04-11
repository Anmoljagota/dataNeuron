import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  Box,
  SimpleGrid,
  Flex,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { AddData, GetData, UpdateData, count } from "../../redux/slices/action";
import UserModal from "./AddUserModal";
import UpdateUserModal from "./UpdateUserModal";
import { ScaleLoader } from "react-spinners";
const SecondTask = () => {
  const toast = useToast();
  const details = {
    image: "",
    name: "",
    field: "",
    position: "",
    EmployeType: "",
  };

  //to store the useradded data in the form
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

  //Dynamicall toaster
  const Toaster = (title, status) => {
    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
    });
  };

  //function to dispatch the user details
  const handleSubmit = async (e, onClose, identifier, id) => {
    if (!data.image || !data.name || !data.position || !data.field) {
      Toaster("All fields are required", "error");
    } else {
      if (!identifier) {
        onClose();
        await dispatch(AddData(data));
        const res = await dispatch(GetData());
        setUpdateData(res.payload);
        dispatch(count());
        Toaster("Employee Created.", "success");
      } else {
        dispatch(UpdateData({ id, data })).then(() => {
          dispatch(count());
          Toaster("Employee Updated.", "success");
          onClose();
        });
      }
      setData(details);
    }
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
        <Text>
          Add api Count : {Apicounts.addCount >= 0 ? Apicounts.addCount : 0}
        </Text>

        <Text>
          Update api Count:{" "}
          {Apicounts.updateCount >= 0 ? Apicounts.updateCount : 0}
        </Text>

        <UserModal
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Flex>
      {loading ? (
        <Center mt={"100px"}>
          <ScaleLoader color="#36d7b7" />
        </Center>
      ) : (
        <SimpleGrid columns={[1, 2, 5]} spacing="30px" w={"90%"} m={"auto"}>
          {updateData?.map((ele) => (
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
                data={ele}
                handleChange={handleUpdatedata}
                handleSubmit={handleSubmit}
              />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default SecondTask;
