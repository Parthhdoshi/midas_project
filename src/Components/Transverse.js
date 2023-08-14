import { Autocomplete, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { lengthUnitData, support, types } from './LengthUnit';

const Transverse = (props) => {
    const {data} = props;
  const {setData} = props;
  const [refresh, setrefresh] = React.useState(true);
    const [springType, setSpringType] = React.useState(data.Transverse.supoortOfCulvert.SpringType);

    const handleChangeSpringType = (event) => { 
      setData({
        ...data, Transverse: {...data.Transverse, supoortOfCulvert : { ...data.Transverse.supoortOfCulvert, SpringType:event.target.value}}});
    setSpringType(event.target.checked)}

    React.useEffect(()=>{
      setrefresh(!refresh)
      setSpringType(data.Transverse.supoortOfCulvert.SpringType)
    },[props])

  return (
    <>
    <Grid container rowGap={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={types.options.map((item)=>item)}
          getOptionLabel={options=>options.label}
          defaultValue={types.options[types.options.findIndex(option => option.value === data.Transverse.types)]}
          onChange={(options, newValue) => {
            setData({...data,Transverse:{...data.Transverse,type:newValue.value}})
          }}
          sx={{ maxWidth: 400 }}
          renderInput={(params) => <TextField {...params} label="Type" />}
        />
      </Grid>
    </Grid>

   <Divider sx={{mt:2,mb:2}}/>

   <Grid container rowGap={2} columnSpacing={2}>
    <Grid item >
      <TextField id="standard-basic" label="Size of Plate element" variant="standard"  
value={data.Transverse.sizeOfplateElement}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,sizeOfplateElement:event.target.value}})}/>
    </Grid>
    <Grid item >
    <TextField id="standard-basic" label="b1" variant="standard" 
value={data.Transverse.dimensions.b1.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  b1:{ 
                      ...data.Transverse.dimensions.b1,
                    value:event.target.value
                 }
              },
            },
          })} />    
    </Grid>
    <Grid item >
      
<TextField id="standard-basic" label="b2" variant="standard" 
value={data.Transverse.dimensions.b2.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  b2:{ 
                      ...data.Transverse.dimensions.b2,
                    value:event.target.value
                 }
              },
            },
          })} />  
    </Grid>
    <Grid item >
  
<TextField id="standard-basic" label="b3" variant="standard" 
value={data.Transverse.dimensions.b3.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  b3:{ 
                      ...data.Transverse.dimensions.b3,
                    value:event.target.value
                 }
              },
            },
          })} />    

    </Grid>
    <Grid item >

<TextField id="standard-basic" label="b4" variant="standard" 
value={data.Transverse.dimensions.b4.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  b4:{ 
                      ...data.Transverse.dimensions.b4,
                    value:event.target.value
                 }
              },
            },
          })} />    

    </Grid>
    <Grid item >
<TextField id="standard-basic" label="b5" variant="standard"
value={data.Transverse.dimensions.b5.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  b5:{ 
                      ...data.Transverse.dimensions.b5,
                    value:event.target.value
                 }
              },
            },
          })} />    

    </Grid>
    <Grid item >
<TextField id="standard-basic" label="b6" variant="standard" 
value={data.Transverse.dimensions.b6.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  b6:{ 
                      ...data.Transverse.dimensions.b6,
                    value:event.target.value
                 }
              },
            },
          })} />    

    </Grid>
    <Grid item >
<TextField id="standard-basic" label="b7" variant="standard" 
value={data.Transverse.dimensions.b7.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  b7:{ 
                      ...data.Transverse.dimensions.b7,
                    value:event.target.value
                 }
              },
            },
          })} />    

    </Grid>
    <Grid item >
<TextField id="standard-basic" label="D" variant="standard" 
value={data.Transverse.dimensions.d.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  d:{ 
                      ...data.Transverse.dimensions.d,
                    value:event.target.value
                 }
              },
            },
          })}/>    

    </Grid>
    <Grid item >
<TextField id="standard-basic" label="n" variant="standard" 
value={data.Transverse.dimensions.n.value}
onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              dimensions: {
                  ...data.Transverse.dimensions, 
                  n:{ 
                      ...data.Transverse.dimensions.n,
                    value:event.target.value
                 }
              },
            },
          })} />    

    </Grid>
   </Grid>

   <Divider sx={{mt:2,mb:2}}/>

<Typography variant="h6" gutterBottom>
       Support Of PI Frame
      </Typography>

      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={support.options.map((item)=>item)}
      defaultValue={support.options[support.options.findIndex(option => option.value === data.Transverse.transverseFixedSupport)]}
      getOptionLabel={options=>options.label}
      onChange={(options, newValue) => {
        setData({...data,Transverse:{...data.Transverse,transverseFixedSupport:newValue.value}})
      }}
      sx={{ maxWidth: 400 }}
      renderInput={(params) => <TextField {...params} label="Transverse fixed support from left side" />}
    />

<Divider sx={{mt:2,mb:2}}/>

<Typography variant="h6" gutterBottom>
       Support Of Culvert
      </Typography>

      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Spring Type</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={springType}
          onChange={handleChangeSpringType}
        >
          <FormControlLabel value="general" control={<Radio />} label="General" />
          <FormControlLabel value="compression" control={<Radio />} label="Compression only" />
        </RadioGroup>
      </FormControl>

      <Divider sx={{mt:2,mb:2}}/>

      <Typography variant="h6" gutterBottom>
      Modulus Of Subgrade Reaction
      </Typography>
      <Grid container rowGap={2} columnSpacing={2}>
        <Grid item>
        <TextField id="standard-basic" label="Lower" variant="standard" 
      value={data.Transverse.supoortOfCulvert.ModulusOfSubGradeReaction.lower}
      onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              supoortOfCulvert: {
                  ...data.Transverse.supoortOfCulvert, 
                  ModulusOfSubGradeReaction:{ 
                      ...data.Transverse.supoortOfCulvert.ModulusOfSubGradeReaction,
                      lower:event.target.value
                 }
              },
            },
          })}  />  
        </Grid>
        <Grid item>
        <TextField id="standard-basic" label="Lateral" variant="standard" 
value={data.Transverse.supoortOfCulvert.ModulusOfSubGradeReaction.lateral}
      onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              supoortOfCulvert: {
                  ...data.Transverse.supoortOfCulvert, 
                  ModulusOfSubGradeReaction:{ 
                      ...data.Transverse.supoortOfCulvert.ModulusOfSubGradeReaction,
                      lateral:event.target.value
                 }
              },
            },
          })}  />
        </Grid>
        <Grid item>
                  
      <TextField id="standard-basic" label="Upper" variant="standard" 
      value={data.Transverse.supoortOfCulvert.ModulusOfSubGradeReaction.upper}
      onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              supoortOfCulvert: {
                  ...data.Transverse.supoortOfCulvert, 
                  ModulusOfSubGradeReaction:{ 
                      ...data.Transverse.supoortOfCulvert.ModulusOfSubGradeReaction,
                      upper:event.target.value
                 }
              },
            },
          })} />   
        </Grid>
      </Grid>
       
      <Divider sx={{mt:2,mb:2}}/>

      <TextField id="standard-basic" label="Length Of Elastic Link" variant="standard" 
       value={data.Transverse.supoortOfCulvert.LengthOfElasticLink}
      onChange={(event)=>setData({
            ...data,
            Transverse: {
              ...data.Transverse,
              supoortOfCulvert: {
                  ...data.Transverse.supoortOfCulvert, 
                  LengthOfElasticLink:event.target.value
              },
            },
          })} />   

<Divider sx={{mt:2,mb:2}}/>

      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={lengthUnitData.options.map((item)=>item)}
      getOptionLabel={options=>options.label}
      defaultValue={lengthUnitData.options[lengthUnitData.options.findIndex(option => option.value === data.Transverse.lengthUnit)]}
      onChange={(options, newValue) => {
        setData({...data,Transverse:{...data.Transverse,lengthUnit:newValue.value}})
      }}
      sx={{ maxWidth: 400 }}
      renderInput={(params) => <TextField {...params} label="Length-Unit" />}
    />
    </>
  )
}

export default Transverse