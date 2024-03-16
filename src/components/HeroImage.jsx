import { addEffect } from '@react-three/fiber';
import EmergingImage from '../helper//EmergingImage';
import Scene from '../helper/Scene';
function InterfaceTest() {
  // const [type, setType] = useState(0);

  // useEffect(() => {
  //   const nav = [...document.querySelectorAll('.frame__demos-item')];
  //   nav.forEach((el) => el.classList.remove('is-active'));
  //   nav[type].classList.add('is-active');
  // }, [type]);

  // typeは0〜4で指定

  return (
    <>
      <Scene />
      <div>
        {/* <div>
          <nav>
            <span>Variations </span>
            <a
              className="frame__demos-item is-active"
              onClick={() => setType(0)}
              >
              1
              </a>
              <a className="frame__demos-item" onClick={() => setType(1)}>
              2
              </a>
              <a className="frame__demos-item" onClick={() => setType(2)}>
              3
              </a>
              <a className="frame__demos-item" onClick={() => setType(3)}>
              4
              </a>
              <a className="frame__demos-item" onClick={() => setType(4)}>
              5
              </a>
              </nav>
            </div> */}
        <EmergingImage
          type="2"
          url="./assets/images/dummy-main.jpg"
          className="absolute inset-0 aspect-[16/2]  h-full w-full"
        />

        {/* <div className="grid">
          <figure className="grid__item">
          <div className="relative aspect-[16/9] h-auto w-full">
          </div>
          </figure>
        </div> */}
      </div>
    </>
  );
}

export default InterfaceTest;
