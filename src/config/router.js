import Popular from "../page/popular/popular";
import BattleResult from "../page/battleResult/battleResult";
import Battle from "../page/battle/battle";

const routes = [
  {
    path:'/',
    component:Popular,
    exact:true
  },
  {
    path: '/Battle',
    component: Battle,
    exact: true
  },
  {
    path:'/BattleResult',
    component:BattleResult
  }
]
export default routes