import {Component} from "../../component";
const Typed = require("typed.js");
const uuid = require ('uuid/v1');

export class Slogan extends Component {
    private sloganText: HTMLElement;
    private id: string;

    constructor (element) {
        super (element);
        this.id = 'slogan-' + uuid();
    }

    protected onMounted(): void {
        // this.initialize();
    }

    protected onUnmounted(): void {

    }

    private initialize (): void {
        this.sloganText = this.getRefs('text').first();
        this.sloganText.classList.add(this.id);
        this.sloganText.innerText = '';

        new Typed('.' + this.id, {
            strings: ["Tworzymy nową <br> <strong>rzeczywistość</strong> <br> od podstaw"],
            typeSpeed: 75,
            cursorChar: "I"
        });
    }
}