import { useState, useEffect } from "react";
function Slider() {
  const data = [{img : "./pepsi.png",title : "Pepsi"}, {img : "./sprite.png",title : "Sprite"}, {img : "./cocacola.png",title : "Coca-Cola"}];
  const [active, setActive] = useState([false, false, false]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const backup = [...active];
    for (let i = 0; i < active.length; i++) {
      if (i === counter) {
        backup[i] = true;
        const Slider = document.querySelector(".slider");
        if (counter === 0) {
          Slider.style.background = "linear-gradient(to right ,blue,red)";
        } else if (counter === 1) {
          Slider.style.background ="linear-gradient(to right ,yellow,green)";
        } else if (counter === 2) {
          Slider.style.background = "linear-gradient(to right ,black,red)";
        }
      } else {
        backup[i] = false;
      }
    }
    setActive(backup);
  }, [counter]);
  return (
    <>
      <button id="button"
        onClick={() => {
          if (counter === 0) {
            setCounter(2);
          } else {
            setCounter(counter - 1);
          }
        }}
      >
        left
      </button>
      <div className="slider">
        
          {data.map((data,idx) => (
            <>{<img src={data.img} className ={`${active[idx] && "active"}`} style = {{
              position : "absolute",
              left : "-300px",
              transition : "1s"
            }} />}</>
          ))}
              {data.map((data,idx)=>(
                <div className ={`${active[idx] && "active"} text`} style={{transition : "1s",width : "500px",position : "absolute", right : "-500px"}}>
                  <h1 style={{marginTop : "0px"}}>{data.title}</h1>
                  <p style={{textAlign : "left"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis amet cupiditate nulla deserunt provident ipsum blanditiis ut reiciendis. Corporis, reiciendis adipisci recusandae doloribus possimus quo voluptatem debitis voluptate fuga?</p>
                  <p style={{textAlign : "left"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iste aperiam eveniet nulla quaerat minus, accusantium at voluptatibus rerum dolor natus! Alias, dicta. Blanditiis, voluptates iure necessitatibus optio voluptatem expedita?</p>
                </div>
            ))}
      </div>
      <button id="button"
        onClick={() => {
          if (counter === 2) {
            setCounter(0);
          } else {
            setCounter(counter + 1);
          }
        }}
      >
        right
      </button >
    </>
  );
}

export default Slider;
