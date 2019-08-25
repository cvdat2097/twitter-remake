import React from 'react';
import { TransContext } from './TransContext';

const translate = (language, dictionary, textId, args) => {
    const languagePack = dictionary[language];

    if (!languagePack) {
        throw new Error(
            `Language '${language}' not found in provided dictionary`
        );
    }

    let text = languagePack[textId];

    if (text) {
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];

            text = text.replace(
                /([^\\]%)|(^%)/,
                sub => `${sub.charAt(sub.length - 2)}${arg}`
            );
        }
    }

    return text;
};

export const trans = (textId, ...args) => {
    let translatedText = '';

    // TODO: return STRING, not React Element
    const x = (
        <TransContext.Consumer>
            {contextValue => {
                if (typeof textId === 'string') {
                    translatedText = translate(
                        contextValue.language,
                        contextValue.dictionary,
                        textId,
                        args
                    );

                    return translatedText;
                }

                return textId;
            }}
        </TransContext.Consumer>
    );

    return x;
};
