import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

type Props = {
  link: string;
};

function VoteButton({ link }: Props) {
  const [visible, setVisible] = useState(true);
  const [dragged, setDragged] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setDragged(false);
  };

  const handleDrag = () => {
    setDragged(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setVisible(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragged) {
      e.stopPropagation();
      window.open(link, '_blank');
    }
  };

  return visible ? (
    <Draggable
      nodeRef={nodeRef}
      onStart={handleStart}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        className="absolute flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-pink-500 border-4 border-black rounded-full cursor-move shadow-xl text-center text-sm font-bold left-10 top-16 md:top-16 md:left-10 w-36 h-36 p-2 z-50"
        onClick={handleClick}
      >
        <div
          className="absolute right-0 top-0 rounded-full cursor-pointer bg-red-600 text-white text-xs flex items-center justify-center w-5 h-5"
          onClick={handleClose}
        >
          x
        </div>
        <div className="transform -rotate-15">
          Vote for us in the Best of the Best. CLICK HERE
        </div>
      </div>
    </Draggable>
  ) : null;
}

export default VoteButton;
