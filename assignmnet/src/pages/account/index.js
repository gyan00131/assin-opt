import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import axios from "axios";

function Account(props) {
  const [value, setValue] = React.useState("1");
  const [selectedTab, setSelectedTab] = useState(1);
  const [data, setData] = useState([]);

  const [dataEdit, SetddataEdit] = useState({});

  const [AgeEdit, setAgeEdit] = useState(dataEdit.age ? dataEdit.age : "");
  const [SalaryEdit, setSalaryEdit] = useState(
    dataEdit.salary ? dataEdit.salary : ""
  );
  const [NameEdit, setNameEdit] = useState(dataEdit.name ? dataEdit.name : "");

  const [image, setImage] = useState(null);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setSelectedTab(newValue);
    setValue(newValue);
    localStorage.setItem("selectedTab", newValue);
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const listingData = async () => {};

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setSelectedTab(parseInt(storedTab));
      setValue(storedTab);
    }
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees--")
      .then((response) => {
        if (response.data) {
          setData(response.data);
        }
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        let resp = {
          list: [
            {
              id: 1,
              employee_name: "Tiger Nixon",
              employee_salary: 320800,
              employee_age: 61,
              profile_image: "",
            },
            {
              id: 2,
              employee_name: "Garrett Winters",
              employee_salary: 170750,
              employee_age: 63,
              profile_image: "",
            },
            {
              id: 3,
              employee_name: "Ashton Cox",
              employee_salary: 86000,
              employee_age: 66,
              profile_image: "",
            },
            {
              id: 4,
              employee_name: "Cedric Kelly",
              employee_salary: 433060,
              employee_age: 22,
              profile_image: "",
            },
            {
              id: 5,
              employee_name: "Airi Satou",
              employee_salary: 162700,
              employee_age: 33,
              profile_image: "",
            },
            {
              id: 6,
              employee_name: "Brielle Williamson",
              employee_salary: 372000,
              employee_age: 61,
              profile_image: "",
            },
            {
              id: 7,
              employee_name: "Herrod Chandler",
              employee_salary: 137500,
              employee_age: 59,
              profile_image: "",
            },
            {
              id: 8,
              employee_name: "Rhona Davidson",
              employee_salary: 327900,
              employee_age: 55,
              profile_image: "",
            },
            {
              id: 9,
              employee_name: "Colleen Hurst",
              employee_salary: 205500,
              employee_age: 39,
              profile_image: "",
            },
            {
              id: 10,
              employee_name: "Sonya Frost",
              employee_salary: 103600,
              employee_age: 23,
              profile_image: "",
            },
            {
              id: 11,
              employee_name: "Jena Gaines",
              employee_salary: 90560,
              employee_age: 30,
              profile_image: "",
            },
            {
              id: 12,
              employee_name: "Quinn Flynn",
              employee_salary: 342000,
              employee_age: 22,
              profile_image: "",
            },
            {
              id: 13,
              employee_name: "Charde Marshall",
              employee_salary: 470600,
              employee_age: 36,
              profile_image: "",
            },
            {
              id: 14,
              employee_name: "Haley Kennedy",
              employee_salary: 313500,
              employee_age: 43,
              profile_image: "",
            },
            {
              id: 15,
              employee_name: "Tatyana Fitzpatrick",
              employee_salary: 385750,
              employee_age: 19,
              profile_image: "",
            },
            {
              id: 16,
              employee_name: "Michael Silva",
              employee_salary: 198500,
              employee_age: 66,
              profile_image: "",
            },
            {
              id: 17,
              employee_name: "Paul Byrd",
              employee_salary: 725000,
              employee_age: 64,
              profile_image: "",
            },
            {
              id: 18,
              employee_name: "Gloria Little",
              employee_salary: 237500,
              employee_age: 59,
              profile_image: "",
            },
            {
              id: 19,
              employee_name: "Bradley Greer",
              employee_salary: 132000,
              employee_age: 41,
              profile_image: "",
            },
            {
              id: 20,
              employee_name: "Dai Rios",
              employee_salary: 217500,
              employee_age: 35,
              profile_image: "",
            },
            {
              id: 21,
              employee_name: "Jenette Caldwell",
              employee_salary: 345000,
              employee_age: 30,
              profile_image: "",
            },
            {
              id: 22,
              employee_name: "Yuri Berry",
              employee_salary: 675000,
              employee_age: 40,
              profile_image: "",
            },
            {
              id: 23,
              employee_name: "Caesar Vance",
              employee_salary: 106450,
              employee_age: 21,
              profile_image: "",
            },
            {
              id: 24,
              employee_name: "Doris Wilder",
              employee_salary: 85600,
              employee_age: 23,
              profile_image: "",
            },
          ],
        };

        setData(resp.list);
        setLoading(false);
      });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    salary: "",
    age: "",
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        //setImage(e.target.result);
        setImage(reader.result.toString() || "");
      };
      reader.readAsDataURL(file);
      console.log(reader);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("salary", formData.salary);
    formDataToSend.append("age", formData.age);
    formDataToSend.append("profileImage", formData.profileImage);

    try {
      const response = await axios.post("/submit-form", formDataToSend);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    console.log("Name", NameEdit);
    console.log("Salary", SalaryEdit);
    console.log("Age", AgeEdit);
  };

  if (data.length == 0) return <div>Waiting....</div>;

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Addt" value="1" />
            <Tab label="Edit" value="2" />
            <Tab label="List" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                style={{ background: "gray" }}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="salary">Salary:</label>
              <input
                type="number"
                id="salary"
                name="salary"
                min="0"
                style={{ background: "gray" }}
                value={formData.salary}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                min="18"
                style={{ background: "gray" }}
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="profileImage">Profile Image:</label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>

          {image && <img src={image} alt="Preview" />}
        </TabPanel>
        <TabPanel value="2">
          <div>Edit</div>

          <form onSubmit={handleEdit}>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                style={{ background: "gray" }}
                value={AgeEdit}
                onChange={({ target }) => {
                  setNameEdit(target.value);
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="salary">Salary:</label>
              <input
                type="number"
                id="salary"
                name="salary"
                min="0"
                style={{ background: "gray" }}
                value={SalaryEdit}
                onChange={({ target }) => {
                  setSalaryEdit(target.value);
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                min="18"
                style={{ background: "gray" }}
                value={AgeEdit}
                onChange={({ target }) => {
                  setAgeEdit(target.value);
                }}
              />
            </div>

            <Button type="submit" variant="contained">
              Update
            </Button>
          </form>
        </TabPanel>
        <TabPanel value="3">
          <h1>Listing</h1>

          {data && (
            <div>
              {" "}
              Total Data = {data.length}
              <div>
                <span>Name</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;
                <span>Salary</span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;
                <span>Age</span>
              </div>
              {data.map((item, idx) => (
                <div key={item.id}>
                  <span>
                    {item.employee_name.length > 25
                      ? item.employee_name.slice(0, 25)
                      : item.employee_name}
                  </span>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;
                  <span>{item.employee_salary}</span>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp;
                  <span>{item.employee_age}</span>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span
                    onClick={(idx) => {
                      SetddataEdit({
                        name: item.employee_name,
                        age: item.employee_age,
                        salary: item.employee_salary,
                      });
                      setSelectedTab("2");
                      setValue("2");
                      localStorage.setItem("selectedTab", "2");
                    }}
                  >
                    For Edit click me
                  </span>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default Account;
