/// <reference path="../dispatcher/dispatcher.ts"/>

module rpgcards {

    /* Deck actions */
    export class ActionNewDeck implements Action {
        constructor() {}
    }
    export class ActionDeleteDeck implements Action {
        constructor(private _id: string) {}
        get id(): string {return this._id}
    }
    export class ActionSelectDeck implements Action {
        constructor(private _id: string) {}
        get id(): string {return this._id}
    }

    /* Card actions */
    export class ActionNewCard implements Action {
        constructor(private _deck_id: string) {}
        get deck_id(): string {return this._deck_id}
    }
    export class ActionDeleteCard implements Action {
        constructor(private _id: string) {}
        get id(): string {return this._id}
    }
    export class ActionSelectCard implements Action {
        constructor(private _id: string) {}
        get id(): string {return this._id}
    }
    export class ActionModifyCard implements Action {
        constructor(private _id: string, private _prop: string, private _val: string) {}
        get id(): string {return this._id}
        get prop(): string {return this._prop}
        get val(): string {return this._val}
    }

    export class Actions  {
        constructor(private _dispatcher: Dispatcher) {
        }
        public newDeck(): void {
            this._dispatcher.dispatch(new ActionNewDeck());
        }
        public deleteDeck(id: string): void {
            this._dispatcher.dispatch(new ActionDeleteDeck(id));
        }
        public selectDeck(id: string): void {
            this._dispatcher.dispatch(new ActionSelectDeck(id));
        }
        public newCard(deck_id: string): void {
            this._dispatcher.dispatch(new ActionNewCard(deck_id));
        }
        public deleteCard(id: string): void {
            this._dispatcher.dispatch(new ActionDeleteCard(id));
        }
        public selectCard(id: string): void {
            this._dispatcher.dispatch(new ActionSelectCard(id));
        }
    }

}
