import LookBookCard from './LookBookCard'
const LBCardContainer = ({index, details}) => {
    const title = details.title;
    const tagline = details.tagline;
    const imageUrl = details.imageUrl;
    const btnText = details.btnText;
  return (
    <div className={`md:w-full  h-130 flex gap-6 mt-10 ${index % 2 === 0 ? 'pt-15' : 'pb-15'}`}>
        <LookBookCard title={title} tagline={tagline} imageUrl={imageUrl} btnText={btnText}/>
    </div>
  )
}

export default LBCardContainer