import { useGLTF, Float } from '@react-three/drei';

export default function YachtModel() {
  const { scene } = useGLTF('/yacht.glb');

  return (
    // ১. Float ইফেক্ট একদম কমিয়ে দেওয়া হয়েছে, যাতে এটি রাডারের ওপর স্থির মনে হয়
    <Float speed={1.5} rotationIntensity={0.01} floatIntensity={0.1}>
      <primitive 
        object={scene} 
        scale={0.5} // বোটের সাইজ আগের চেয়ে একটু বড় করা হয়েছে (ভিডিওর সাথে মিল রাখার জন্য)
        position={[0, 0, 0]} // বোটটিকে একদম পারফেক্ট সেন্টারে (লাইনের ওপর) আনা হয়েছে
        
        // ২. রোটেশন: বোটের মাথা ঠিক সোজা উপরের দিকে রাখার জন্য!
        rotation={[0, 0, 0]} 
      />
    </Float>
  );
}