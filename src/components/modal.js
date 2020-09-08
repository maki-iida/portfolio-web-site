import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 900,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      height: '80vh',
      display: 'inline',
    },
  },
  Image: {
    borderRadius: 16,
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    width: 500,
    height: 300,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: 350,
      height: 250,
    },
  },
  modalImage: {
    marginLeft: 40,
    marginTop: 40,
    borderRadius: 16,
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    width: 500,
    height: 300,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: 250,
      height: 150,
    },
  },
  Work: {
    marginLeft: 40,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      marginTop: 10,
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1.5),
    fontSize: 22,
    color: '#666666',
  },
  skillIcon: {
    marginLeft: 40,
    marginTop: 36,
    marginRight: 5,
    width: 100,
    color: '#4bc0c8',
    backgroundColor: '#fff',
    border: '1px solid rgba(75, 192, 200, 0.5)',
    [theme.breakpoints.down('sm')]: {
      width: 90,
      fontSize: '0.7rem',
    },
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const workFlag = ['0', '1', '2', '3'];
  let portfolioImg =  [];
  let portfolioTitle = [];
  let portfolioDate = [];
  let portfolioSummary = [];
  let gitHubUrl = [];
  let portfolioUrl = [];
  let portfolio = [];
  let portfolioText = [];

  if (props.workFlag === workFlag[0]){
    portfolioTitle = "Portfolio Web Site";
    portfolioImg = './images/p_1.png';
    portfolioDate = '2020.09';
    gitHubUrl = 'https://github.com/maki-iida/portfolio-web-site/';
    portfolioUrl = 'https://portfolio999.herokuapp.com/';
    portfolio = ['React', 'Material-UI','React router'];
    portfolioText = [
      'ポートフォリオをまとめた静的サイト',
      'レスポンシブ対応',
      'ルーティング: react-router-dom',
    ];
  } else if (props.workFlag === workFlag[1]){
    portfolioTitle = "Portfolio";
    portfolioImg = './images/profile_image.png';
    portfolioDate = '2020.08';
    gitHubUrl = 'https://github.com/maki-iida/YouTube-Scraping/';
    portfolioUrl = '';
    portfolio = ['React', 'Material-UI','React router'];
    portfolioText = [
      'フレームワーク: React.js',
      'UIライブラリ: Material UI',
      'ルーティング: react-router-dom',
      'レスポンシブ対応',
      '静的サイト'];
  } else if (props.workFlag === workFlag[2]){
    gitHubUrl = '';
    portfolioUrl = '';
    portfolio = ['React', 'Material-UI','React router'];
    portfolioText = [
      'フレームワーク: React.js',
      'UIライブラリ: Material UI',
      'ルーティング: react-router-dom',
      'レスポンシブ対応',
      '静的サイト'];
  } else if (props.workFlag === workFlag[3]){
    gitHubUrl = '';
    portfolioUrl = '';
    portfolio = ['React', 'Material-UI','React router'];
    portfolioText = [
      'フレームワーク: React.js',
      'UIライブラリ: Material UI',
      'ルーティング: react-router-dom',
      'レスポンシブ対応',
      '静的サイト'];
  }

  return (
    <div>
      <img src={props.Images} alt="" className={classes.Image} onClick={handleOpen} />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
          <div className={classes.app}>
            <img src={portfolioImg} alt="" className={classes.modalImage} />
            <div>
              <br />
              <br />
              {portfolio.map(skill =>
              <Chip key={skill} label={skill} variant="outlined" className={classes.skillIcon} />
              )}
            </div>
          </div>
          <div className={classes.Work}>
            <div className="header">
              <Typography className={classes.title}>
                {props.title}
              </Typography>
              <p className="during">{props.date}</p>
            </div>
            <div className={classes.coment}>
              <p>
                <h2>
                  {portfolioTitle}
                </h2>
                <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(gitHubUrl);}}><GitHubIcon/></Button>
                {portfolioDate}
                <br />
                <br />
                概要
                <br />
                <br />
                <br />
                {portfolioText.map(Text =>
                  <li>{Text}</li>
                )}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}