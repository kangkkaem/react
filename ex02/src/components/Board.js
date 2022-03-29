import React, { useState } from 'react'
import BoardInsert from './BoardInsert';
import BoardList from './BoardList';


const Board = () => {
  const [boards, setBoards] = useState([
    {id:1, title:'국가는 모성의 보호', contents:"국가는 모성의 보호를 위하여 노력하여야 한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 모든 국민은 양심의 자유를 가진다. 국군의 조직과 편성은 법률로 정한다. 공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다. 대통령은 국무회의의 의장이 되고, 국무총리는 부의장이 된다. 모든 국민은 주거의 자유를 침해받지 아니한다. 주거에 대한 압수나 수색을 할 때에는 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다."},
    {id:2, title:'법률',contents:"모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를 가진다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다. 명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다."},
    {id:3, title:'대통령은 취임',contents:"대통령은 취임에 즈음하여 다음의 선서를 한다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다. 선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등 직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는 공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수 없다."}
  ])

  const [ id,setID] = useState(4);

  //게시글등록
  const onInsert = (board) =>{
    const newBoard={
      id:id,
      title: board.title,
      contents: board.contents
  }
  setBoards(boards.concat(newBoard));
  setID(id+1);
  }

  //게시글삭제
  const onDelete =(id) =>{
    const newBoards=boards.filter(b=> b.id !==id);
    setBoards(newBoards);
  }

  return (
   

    <div>
        <h1>상품게시판</h1>
        <BoardInsert onInsert={onInsert}/>
        <hr/>
      <BoardList boards={boards} onDelete={onDelete}/>
    </div>
  )
}

export default Board