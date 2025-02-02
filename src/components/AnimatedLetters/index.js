import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const animationDuration = 850;

  const handleMouseEnter = (e) => {
    if (!e.target.classList.contains('animate')) {
      e.target.classList.add('animate');
      setTimeout(() => {
        e.target.classList.remove('animate');
      }, animationDuration);
    }
  };

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          onMouseEnter={handleMouseEnter}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
