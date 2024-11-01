import { _decorator, CCInteger, Component, Node } from 'cc';
import { Ground } from './Ground';
import { Results } from './Results';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    @property({
        type: Ground,
        tooltip: "this is ground"
    })
    private ground: Ground;

    @property({
        type: Results,
        tooltip: "results go here"
    })
    private result: Results;

    @property({ type: CCInteger })
    public speed = 300;

    @property({ type: CCInteger })
    public pipeSpeed = 200;

    protected onLoad(): void {

    }

    private initListener(): void {

    }

    private startGame(): void {

    }
}


