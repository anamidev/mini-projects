export default function StripPhoto({data}) {
    return (
        <a href={data} download={'photo'}>
            <img src={data} alt={'User photo'}/>
        </a>
    )
}