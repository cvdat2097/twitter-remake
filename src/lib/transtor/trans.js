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

            text = text.replace(/[^\\]%/, sub => `${sub.charAt(0)}${arg}`);
        }
    }

    return text;
};

export const trans = (textId, ...args) => {
    return (
        <TransContext.Consumer>
            {contextValue => {
                if (typeof textId === 'string') {
                    return translate(
                        contextValue.language,
                        contextValue.dictionary,
                        textId,
                        args
                    );
                }

                return textId;
            }}
        </TransContext.Consumer>
    );
};
