const Star = ({filled, onClick, onMouseEnter, onMouseLeave})=>{
    return (
        <span
         style={{
            fontSize: '2rem',
            cursor:'pointer',
            color: filled ? 'gold': ' gray'
         }}
         onClick={onClick}
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
         >
         ★
         </span>
    )
}
export default Star;
// ☆ ✨ ★