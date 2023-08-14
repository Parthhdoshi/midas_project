import React, {useEffect} from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {Autocomplete, Divider, Grid, TextField} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import {lengthUnitData} from "./LengthUnit";

const LongitudinalTab = (props) => {
  // console.log("props", props);
  const [refresh, setrefresh] = React.useState(true);

  const {data} = props;
  const {setData} = props;

  const [structureType, setStructureType] = React.useState(
    data.Longitudinal.structureType
  );

  const [typeOfBridge, setTypeOfBridge] = React.useState(
    data.Longitudinal.typeOfBridge
  );
  const [checked, setChecked] = React.useState(
    data.Longitudinal.wingWall.enable
  );

  React.useEffect(() => {
    console.log("Use effect called");
    setrefresh(!refresh);
    setStructureType(data.Longitudinal.structureType);
    setTypeOfBridge(data.Longitudinal.typeOfBridge);
    setChecked(data.Longitudinal.wingWall.enable)
  }, [props]);

  const structureTypeChange = (event) => {
    setData({...data, structureType: event.target.value});
    setStructureType(event.target.value);
  };
  const typeOfBridgeChange = (event) => {
    setData({...data, typeOfBridge: event.target.value});
    setTypeOfBridge(event.target.value);
  };
  const handleChange = (event) => {
    setData({
      ...data,
      Longitudinal: {
        ...data.Longitudinal,
        wingWall: {
          ...data.Longitudinal.wingWall,
          enable: event.target.checked,
        },
      },
    });
    setChecked(event.target.checked);
  };

  // console.log(lengthUnitData.options.findIndex(option => option.value === data.Longitudinal.lengthUnit))

  return (
    <>
    <Grid container rowGap={2} >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Structure Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={structureType}
            onChange={structureTypeChange}
          >
            <FormControlLabel
              value="2DImensional"
              control={<Radio />}
              label="2-DImensional"
            />
            <FormControlLabel
              value="3DImensional"
              control={<Radio />}
              label="3-DImensional"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Type Of Bridge
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={typeOfBridge}
            onChange={typeOfBridgeChange}
          >
            <FormControlLabel
              value="normal"
              control={<Radio />}
              label="Normal Type Frame"
            />
            <FormControlLabel
              value="box"
              control={<Radio />}
              label="Box Culvert"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      </Grid>

      <Divider sx={{mt:2,mb:2}}/>

      <Grid container rowGap={6}>
      <Grid container xs={12} sm={12} md={6} lg={6} xl={6} rowGap={2}>
        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
          <TextField
            id="standard-basic"
            label="Material"
            variant="standard"
            value={data.Longitudinal.material}
            onChange={(e) =>
              setData({
                ...data,
                Longitudinal: {...data.Longitudinal, material: e.target.value},
              })
            }
          />
        </Grid>
        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}> 
          <TextField
            id="standard-basic"
            label="Span"
            variant="standard"
            value={data.Longitudinal.span}
            onChange={(e) =>
              setData({
                ...data,
                Longitudinal: {...data.Longitudinal, span: e.target.value},
              })
            }
          />
        </Grid>
        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}> 
          <TextField
            id="standard-basic"
            label="Skew Angle"
            variant="standard"
            type="Number"
            value={data.Longitudinal.skewAngle}
            onChange={(e) =>
              setData({
                ...data,
                Longitudinal: {...data.Longitudinal, skewAngle: e.target.value},
              })
            }
          />
        </Grid>
      </Grid>
      <Grid container xs={12} sm={12} md={6} lg={6} xl={6} rowGap={2}>
        <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}> 
          <TextField
            id="standard-basic"
            label="Size of Plate element"
            variant="standard"
            value={data.Longitudinal.sizeOfplateElement}
            onChange={(e) =>
              setData({
                ...data,
                Longitudinal: {
                  ...data.Longitudinal,
                  sizeOfplateElement: e.target.value,
                },
              })
            }
          />
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
            <FormControlLabel
              control={<Checkbox />}
              label="Wing Wall : "
              labelPlacement="end"
              checked={checked}
              onChange={handleChange}
            />
            <TextField
              id="standard-basic"
              disabled={checked}
              label="Thickness"
              variant="standard"
              value={data.Longitudinal.wingWall.thickness}
              onChange={(event) =>
                setData({
                  ...data,
                  Longitudinal: {
                    ...data.Longitudinal,
                    wingWall: {
                      ...data.Longitudinal.wingWall,
                      thickness: event.target.value,
                    },
                  },
                })
              }
            />
          </Grid>
      </Grid>
      </Grid>


      <Divider sx={{mt:2,mb:2}}/>
      <Grid container>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={lengthUnitData.options.map((item) => item)}
          getOptionLabel={(options) => options.label}
          defaultValue={lengthUnitData.options[lengthUnitData.options.findIndex(option => option.value === data.Longitudinal.lengthUnit)]}
          onChange={(options, newValue) => {
            setData({
              ...data,
              Longitudinal: {...data.Longitudinal, lengthUnit: newValue.value},
            });
          }}
          sx={{width: 300}}
          renderInput={(params) => <TextField {...params} label="Length-Unit" />}
        />
      </Grid>
      <Divider sx={{mt:2,mb:2}}/>

      <Grid container rowGap={2} columnSpacing={2}>
        <Grid item>
        <TextField
        id="standard-basic"
        label="t1"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.t1.enable}
        value={data.Longitudinal.dimensions.t1.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                t1: {
                  ...data.Longitudinal.dimensions.t1,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
            id="standard-basic"
            label="t2"
            variant="standard"
            disabled={!data.Longitudinal.dimensions.t2.enable}
            value={data.Longitudinal.dimensions.t2.value}
            onChange={(event) =>
              setData({
                ...data,
                Longitudinal: {
                  ...data.Longitudinal,
                  dimensions: {
                    ...data.Longitudinal.dimensions,
                    t2: {
                      ...data.Longitudinal.dimensions.t2,
                      value: event.target.value,
                    },
                  },
                },
              })
            }
          />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="t3"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.t3.enable}
        value={data.Longitudinal.dimensions.t3.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                t3: {
                  ...data.Longitudinal.dimensions.t3,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
      </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="t4"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.t4.enable}
        value={data.Longitudinal.dimensions.t4.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                t4: {
                  ...data.Longitudinal.dimensions.t4,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
      </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="a1"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.a1.enable}
        value={data.Longitudinal.dimensions.a1.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                a1: {
                  ...data.Longitudinal.dimensions.a1,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
      </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="a2"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.a2.enable}
        value={data.Longitudinal.dimensions.a2.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                a2: {
                  ...data.Longitudinal.dimensions.a2,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
      </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="a3"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.a3.enable}
        value={data.Longitudinal.dimensions.a3.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                a3: {
                  ...data.Longitudinal.dimensions.a3,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="a4"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.a4.enable}
        value={data.Longitudinal.dimensions.a4.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                a4: {
                  ...data.Longitudinal.dimensions.a4,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="b1"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.b1.enable}
        value={data.Longitudinal.dimensions.b1.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                b1: {
                  ...data.Longitudinal.dimensions.b1,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="b2"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.b2.enable}
        value={data.Longitudinal.dimensions.b2.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                b2: {
                  ...data.Longitudinal.dimensions.b2,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="b3"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.b3.enable}
        value={data.Longitudinal.dimensions.b3.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                b3: {
                  ...data.Longitudinal.dimensions.b3,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="b4"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.b4.enable}
        value={data.Longitudinal.dimensions.b4.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                b4: {
                  ...data.Longitudinal.dimensions.b4,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="b5"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.b5.enable}
        value={data.Longitudinal.dimensions.b5.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                b5: {
                  ...data.Longitudinal.dimensions.b5,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="b6"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.b6.enable}
        value={data.Longitudinal.dimensions.b6.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                b6: {
                  ...data.Longitudinal.dimensions.b6,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="h1"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.h1.enable}
        value={data.Longitudinal.dimensions.h1.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                h1: {
                  ...data.Longitudinal.dimensions.h1,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="h2"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.h2.enable}
        value={data.Longitudinal.dimensions.h2.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                h2: {
                  ...data.Longitudinal.dimensions.h2,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="h3"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.h3.enable}
        value={data.Longitudinal.dimensions.h3.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                h3: {
                  ...data.Longitudinal.dimensions.h3,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="A"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.a.enable}
        value={data.Longitudinal.dimensions.a.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                a: {
                  ...data.Longitudinal.dimensions.a,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="C"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.c.enable}
        value={data.Longitudinal.dimensions.c.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                c: {
                  ...data.Longitudinal.dimensions.c,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
        <Grid item>
          <TextField
        id="standard-basic"
        label="P"
        variant="standard"
        disabled={!data.Longitudinal.dimensions.p.enable}
        value={data.Longitudinal.dimensions.p.value}
        onChange={(event) =>
          setData({
            ...data,
            Longitudinal: {
              ...data.Longitudinal,
              dimensions: {
                ...data.Longitudinal.dimensions,
                p: {
                  ...data.Longitudinal.dimensions.p,
                  value: event.target.value,
                },
              },
            },
          })
        }
      />
        </Grid>
      </Grid>

    </>
  );
};

export default LongitudinalTab;
