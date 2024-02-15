
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
        <motion.p
        style={{fontSize:40}}
        >About</motion.p>
      </motion.div>
      <motion.div transition={{duration:1}}className='img-space'style={{ 
    width: 600, }} initial={{width:600}} animate={{width:"100%", height:400}}>

<AnimatePresence mode='exit'>
     <Link to='/'>

  
        <motion.img 
        style={{width: "100%", height: "100%", objectFit: 'cover', borderRadius:20}} 
        src={Batman} 
        alt='batman'
        initial={{y:0,opacity:1 }}
        animate={{y:100,opacity:1}}
   
        exit={{opacity:1}}
        transition={transition}
        />
        
     </Link>

     
      
</AnimatePresence >


      </motion.div>

      <motion.div className='bodySection'>
          <motion.div className='sec-1'
          initial={{opacity:0,scale:0,y:-200}}
          whileInView={{opacity:1, scale:1, y:0}}
          viewport={{once:true}}
          >

          <motion.div className='card-1' 
          >
            <h1>About me</h1>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, necessitatibus fugiat autem harum totam est, quisquam blanditiis hic cum quam, rerum molestiae non reprehenderit consequatur dolor enim reiciendis? Nisi, perspiciatis?</span>
            </motion.div>
          <motion.div className='card-2'
         >
          <h1>My work</h1>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, necessitatibus fugiat autem harum totam est, quisquam blanditiis hic cum quam, rerum molestiae non reprehenderit consequatur dolor enim reiciendis? Nisi, perspiciatis?</span>
            </motion.div>
          <motion.div className='card-3' >
          <h1>My Hobby</h1>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, necessitatibus fugiat autem harum totam est, quisquam blanditiis hic cum quam, rerum molestiae non reprehenderit consequatur dolor enim reiciendis? Nisi, perspiciatis?</span>
            </motion.div>

          </motion.div>
      </motion.div>
  
    </motion.div>
  );
};

export default Home;
