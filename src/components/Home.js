
import { motion, AnimatePresence } from 'framer-motion';
import Batman from '../Assets/Batman.jpg';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';
const transition = { duration : 1, ease: [0.43,0.13,0.23,0.96]}

const Home = () => {

  return (
    <motion.div 
    
    initial={{opacity:1}}
    animate={{opacity:1}}
    exit={{opacity:1}}
    transition={transition}
    className='wrapper'>


      <motion.div className="header">
        <motion.h1>Home</motion.h1>
      </motion.div>
      <motion.div transition={{duration:1}}className='img-space'style={{ marginTop: '2rem',
    width: 600, }} initial={{width:600}} animate={{width:600, height:600}}>

<AnimatePresence mode='exit'>
     <Link to='/about'>
<div style={{borderRadius:"50%"}}>

        <motion.img 
        style={{ width:"100%", backgroundSize:'cover',borderRadius:20 }} 
        src={Batman} 
        alt='batman'
        initial={{y:0,opacity:1 }}
        animate={{y:0,opacity:1}}
  
        exit={{transition:0,opacity:1}}
        transition={transition}
        />
</div>
         
        
     </Link>

     
      
</AnimatePresence >


      </motion.div>
  
    </motion.div>
  );
};

export default Home;
