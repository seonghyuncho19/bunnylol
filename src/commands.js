// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 'fb' | 'mw' | 'gm' | 'yt' | 'gh' | 'r' | 'l' | 'vs' | 'todo' | 'neb' | 'edit' | '$' | 'ynab' | 'ppl' | 'work' | 'tunes' | 'teams' |
                           'cal' | 'gd' | 'wut' | 'g' | 'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};

export const COMMANDS: {[CommandNames] : CommandType} = {
    tunes: {
        name: "Spotify",
        url: "spotify://"
    },
    teams: {
        name: "Teams",
        url: "Teams://"
    },    
    ppl: {
        name: "DPN",
        url: "https://people.deloitte"
    },
    work: {
        name: "DeloitteNet",
        url: "https://my.dnet.deloittenet.com"
    },
    ynab: {
        name: "You Need A Budget",
        url: "https://ynab.com"
    },
    $: {
        name: "Charles Schwab",
        url: "https://schwab.com"
    },
    edit: {
        name: "Edit Commands",
        url: "https://github.com/seonghyuncho19/bunnylol/edit/master/src/commands.js"
    },
    neb: {
        name: "Nebula",
        url: "https://nebula.tv",
    },    
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    mw: {
        name: "Messenger Web",
        url: "https://www.messenger.com/"
    },
    gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    r: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.reddit.com/search?q="
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q=" + "&udm=14"
    },
    vs: {
        name: "VS Code",
        url: "vscode://",
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r"
    },
    wut: {
        name: "Wikipedia",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/wiki/"
    },
    todo: {
        name: "Google Keep",
        url: "https://keep.google.com"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q=" + "&udm=14"
    }
};
