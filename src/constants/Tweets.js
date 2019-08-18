export const TWEETS_ORDER = {
    DEFAULT: Symbol('Default tweets sorting'),
    LASTEST: Symbol('Lastest tweets first'),
};

export const MEDIA_TYPE = {
    IMAGE: 'image',
    TEXT: 'text',
};

window.tweetsOrder = TWEETS_ORDER;
