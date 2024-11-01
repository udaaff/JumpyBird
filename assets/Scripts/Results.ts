import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {
    @property({type: Label})
    public scoreLabel: Label;

    @property({type: Label})
    public highScore: Label;

    @property({type: Label})
    public resultEnd: Label;

    private maxScore = 0;
    private currentScore = 0;

    public updateScore(num: number): void {
        this.currentScore = num;
        this.scoreLabel.string = `${num}`;
    }

    public resetScore(): void {
        this.updateScore(0);
        this.hideResults();
    }

    public addScore(): void {
        this.updateScore(this.currentScore + 1);
    }

    public showResults(): void {
        this.maxScore = Math.max(this.currentScore, this.maxScore);
        this.highScore.string = `High Score: ${this.maxScore}`;
        this.resultEnd.node.active = true;
    }

    public hideResults(): void {
        this.highScore.node.active = false;
        this.resultEnd.node.active = false;
    }
}


