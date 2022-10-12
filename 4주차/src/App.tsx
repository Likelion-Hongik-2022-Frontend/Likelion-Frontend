import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { toDoState } from './atoms';
import { useRecoilState } from 'recoil';
import Board from './Components/Board';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const {destination, draggableId, source} = info;
    if(destination?.droppableId === source.droppableId){
      //같은 보드 안
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1); //한개 지우기
        boardCopy.splice(destination?.index, 0, draggableId); //draggableId 추가하기
        return {
          ...allBoards,
          [source.droppableId]: boardCopy
        };
    });

    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
