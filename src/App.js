import "./App.css";
import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LongitudinalTab from "./Components/LongitudinalTab";
import Transverse from "./Components/Transverse";
import { Button } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function App() {

  const [jsonData, setJsonData] = React.useState(null);


  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState({
    Longitudinal:{
      structureType : "3DImensional",
      typeOfBridge: "box",
      material:10,
      span:1.000,
      sizeOfplateElement:1.00,
      wingWall:{
        enable:true,
        thickness:1.000,
      },
      skewAngle:0,
      lengthUnit:"",
      dimensions:{
        t1:{enable:true, value:0},
        t2:{enable:true, value:0},
        t3:{enable:true, value:0},
        t4:{enable:true, value:0},
        a1:{enable:true, value:0},
        a2:{enable:true, value:0},
        a3:{enable:true, value:0},
        a4:{enable:true, value:0},
        b1:{enable:true, value:0},
        b2:{enable:true, value:0},
        b3:{enable:true, value:0},
        b4:{enable:true, value:0},
        b5:{enable:true, value:0},
        b6:{enable:true, value:0},
        h1:{enable:true, value:0},
        h2:{enable:true, value:0},
        h3:{enable:true, value:0},
        a:{enable:true, value:0},
        c:{enable:true, value:0},
        p:{enable:true, value:0},
      }
    },
    Transverse:{
      type:"",
      sizeOfplateElement:1.00,
      dimensions:{
        b1:{enable:true, value:0},
        b2:{enable:true, value:0},
        b3:{enable:true, value:0},
        b4:{enable:true, value:0},
        b5:{enable:true, value:0},
        b6:{enable:true, value:0},
        b7:{enable:true, value:0},
        d:{enable:true, value:0},
        n:{enable:true, value:0},
      },
      transverseFixedSupport:"",
      supoortOfCulvert:{
        SpringType:"general",
        ModulusOfSubGradeReaction:{
          lower:0,
          lateral:0,
          upper:0,
        },
        LengthOfElasticLink:0,
      },
      lengthUnit:""
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const downloadDataAsJSON = () => {
    const jsonData = JSON.stringify(data, null, 2); 
    const blob = new Blob([jsonData], { type: "application/json" });
 
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.json";
    link.click();
 
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        try {
          const parsedData = JSON.parse(contents);
          setJsonData(parsedData);
        } catch (error) {
          setJsonData(null);
        }
      };

      reader.readAsText(file);
    }
  };

  const downloadCsv = () => {
    const csvContent = generateCsv(data);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };

  const generateCsv = data => {
    const headers = Object.keys(data);
    const values = headers.map(header => data[header]);

    const csvRows = [];
    csvRows.push(headers.join(',')); // Add header row
    csvRows.push(values.join(',')); // Add data row

    return csvRows.join('\n');
  };


      React.useEffect(()=>{
        setData(!!jsonData?jsonData:data)
      },[jsonData])


  return (
    <>
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Longitudinal" {...a11yProps(0)} />
          <Tab label="Transverse" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LongitudinalTab data={data} setData={setData}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <Transverse data={data} setData={setData} />
      </CustomTabPanel>

      <Box sx={{ mb: '10%', display:"Flex", justifyContent:"space-evenly"}}>
        <Button onClick={()=>downloadDataAsJSON()} variant="contained">Download Json</Button>
        {/* <Button onClick={()=>downloadCsv()} variant="contained">Download Excel</Button> */}
        <div>
        Upload:<input type="file" accept=".json" onChange={handleFileChange} />
        </div>
      </Box>
      </Box>
    </>
  );
}

export default App;
