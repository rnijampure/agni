import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TimePickers from '../../timePicker'
import FormHelperText from '@material-ui/core/FormHelperText';
import Container from '@material-ui/core/Container';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomiseDates from '../../customizeDates'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 5), width: '100%',
  },
  button: {
    margin: theme.spacing(1, 0, 5),
    width: '100%',
  },
  DialogContent: {
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
        width: "50%",
        minWidth : '500px'
      },
  },
  Dialog:{
    [theme.breakpoints.up('sm')]: {
        width: "100%",
        minWidth : '500px'
      },
  },
  DialogActions:{
    flexDirection : 'column'
  },
  basicMultiSelect:{
    display: 'inlineFlex'
  },
  flexContainer:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  }
  
}));
function TeamDialog() {
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);


  };

  const handleClose = () => {
    setOpen(false);

  };
  const classes = useStyles();
 let history = useHistory();
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        CREATE TEAM
      </Button>




      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen}
      >
        <DialogTitle id="form-dialog-title">Create TEAM</DialogTitle>
        <DialogContent>




          <Formik
            initialValues={{ teamNumber: '' , color: '', GCLID :'' }}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setTimeout(() => {
                setOpen(false);
                history.push("/dashboard/Teams/")



                //  setSubmitting(false);
              }, 500);
            }}

            validationSchema={Yup.object().shape({
              teamNumber: Yup.number() 
                .required('Required Team Number'),
                GCArea : Yup.string()
                .required('Required Green Cluster Area or Number') ,
                GCLID:Yup.string()
            })}
          >

            {props => {
              const {

                values,
                touched,
                errors,
                dirty,
                isSubmitting, 
                handleBlur,
                handleSubmit, 
                handleChange, 
              } = props;
              return (

                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className={classes.paper}>

                    <form className={classes.form} noValidate onSubmit={handleSubmit} >
                      <Field
                        validateOnBlur
                        validateOnChange
                        name="teamNumber"
                        render={({ field, form }) => (

                          <TextField
                            error={
                              Boolean(form.errors.teamNumber && form.touched.teamNumber)
                            }
                            margin="normal"
                            required
                            fullWidth
                            id="teamNumber"
                            label="Create Green Cluster Number"
                            name="teamNumber"
                            autoComplete="teamNumber"
                            autoFocus
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.teamNumber &&
                              form.touched.teamNumber &&
                              String(form.errors.teamNumber)
                            }
                          />
                        )}
                      />
  <InputLabel htmlFor="GCArea" style={{'textAlign' : 'left'}}>Green Cluster Number/Area</InputLabel>
       
<Field
                        validateOnBlur
                        validateOnChange
                        name="GCArea" 
                        label="GCArea"
                        render={({ field, form }) => (
                            <Select
                            native
                            error={
                                Boolean(form.errors.GCArea && form.touched.GCArea)
                              }
                            value={values.GCArea}
                            onChange={handleChange }
                            inputProps={{
                              name: 'GCArea',
                              id: 'GCArea',
                            }} 
                            required
                            fullWidth 
                            
                            name="GCArea"
                            autoComplete="GCArea"
                            autoFocus
                           
                          >
                            <option value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                          </Select>
 
                        )}
                      />
    <FormHelperText>{
                              errors.GCArea &&
                              touched.GCArea &&
                              String( errors.GCArea)
                            }</FormHelperText>
      <div  className={classes.flexContainer} >                       
       <CustomiseDates />
       <TimePickers />
       </div>
       <Field
                        validateOnBlur
                        validateOnChange
                        name="GCLID"
                        render={({ field, form }) => (

                          <TextField
                            error={
                              Boolean(form.errors.GCLID && form.touched.GCLID)
                            }
                            margin="normal"
                            required
                            fullWidth
                            id="GCLID"
                            label="Create Green Cluster Lead Id"
                            name="GCLID"
                            autoComplete="GCLID"
                            autoFocus
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.GCLID &&
                              form.touched.GCLID &&
                              String(form.errors.GCLID)
                            }
                          />
                        )}
                      />
                         <Field
                        validateOnBlur
                        validateOnChange
                        name="NoOfFeeders"
                        render={({ field, form }) => (

                          <TextField
                            error={
                              Boolean(form.errors.NoOfFeeders && form.touched.NoOfFeeders)
                            }
                            margin="normal"
                            required
                            fullWidth
                            id="NoOfFeeders"
                            label="No Of Feeders"
                            name="NoOfFeeders"
                            autoComplete="NoOfFeeders"
                            autoFocus
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.NoOfFeeders &&
                              form.touched.NoOfFeeders &&
                              String(form.errors.NoOfFeeders)
                            }
                          />
                        )}
                      />
                                               <Field
                        validateOnBlur
                        validateOnChange
                        name="FeederId"
                        render={({ field, form }) => (

                          <TextField
                            error={
                              Boolean(form.errors.FeederId && form.touched.FeederId)
                            }
                            margin="normal"
                            required
                            fullWidth
                            id="FeederId"
                            label="Feeder Id"
                            name="FeederId"
                            autoComplete="FeederId"
                            autoFocus
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              form.errors.FeederId &&
                              form.touched.FeederId &&
                              String(form.errors.FeederId)
                            }
                          />
                        )}
                      />  
                  <DialogActions>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      CREATE
     </Button>
                    <Hidden mdUp>
                      <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={handleClose}
                      >
                        CANCEL
     </Button>
                    </Hidden>
                  </DialogActions>   </form>
                  </div>
                </Container>
              );
            }}

          </Formik>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default withRouter(TeamDialog)