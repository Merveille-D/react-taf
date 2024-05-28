export function Entete({textu}) {
    const style={
        width:'100px',
        borderTop: '4px solid ',
        borderImage: 'linear-gradient(to right, rgb(101, 50, 118), rgb(105, 31, 74),rgb(241, 241, 241)',
        borderImageSlice: 1,
        margin:'auto',
        marginBottom:'20px'
    }
    return <div >
    <h1 className="text-center">{textu}</h1>
    <div style={style}></div>
    </div>
}