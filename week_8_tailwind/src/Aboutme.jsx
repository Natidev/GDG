import user from './assets/images/images.png'
function Aboutme(){
return <section className='grid grid-cols-1 m-4 rounded-3xl bg-slate-300 p-4 w-max h-max'>
<img className='align-center rounded-3xl' src={user} alt="Picture of the user"/>
<p className='flex justify-center'>
    My name is Natinael <br/>I am a memeber of the GDSC AAStU club"
</p>
</section>
}
export default Aboutme;