import { _decorator, CCInteger, Component, director, EventKeyboard, Input, input, KeyCode, Node } from 'cc';
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
        this.initListener();
        this.result.resetScore();
        director.pause();
    }

    private initListener(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    private startGame(): void {
        this.result.hideResults();
        director.resume();
    }

    private gameOver(): void {
        this.result.showResults();
        director.pause();
    }

    private resetGame(): void {
        this.result.resetScore();
        this.startGame()
    }

    private onKeyDown(event: EventKeyboard): void {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.gameOver();
                break;
            case KeyCode.KEY_P:
                this.result.addScore();
                break;
            case KeyCode.KEY_Q:
                this.resetGame();
                break;
            default:
                break;
        }
    }
}


