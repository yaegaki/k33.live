export type PlayerEventKind = 'YTPReady' | 'YTPStart' | 'YTPTime';

export type FilterOption = {
    grayscale?: number,
    brightness?: number,
    blur?: number,
};

export class Player {
    raw: any;

    constructor(query: string) {
        this.raw = (<any>$(query)).YTPlayer();
    }

    public On(kind: PlayerEventKind, f: () => void) {
        this.raw.on(kind, f);
    }

    public ApplyFilters(option: FilterOption) {
        this.raw.YTPApplyFilters(option);
    }

    public Play() {
        this.raw.Play();
    }
}