import React from 'react';

import { Button } from '../utils/Button';

import photoSVG from '../../assets/svg/icons/photo.svg';
import gifSVG from '../../assets/svg/icons/gif.svg';
import pollSVG from '../../assets/svg/icons/poll.svg';
import emoticonSVG from '../../assets/svg/icons/emoticon.svg';
import addSVG from '../../assets/svg/icons/add.svg';
import './tweetcomposer.scss';

const INITIAL_STATE = {
    post: '',
};

class TweetComposer extends React.Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            post: event.target.value,
        });
    }

    render() {
        const { post } = this.state;

        return (
            <div className="tw-composer d-flex px-3 py-2">
                <img
                    className="rounded-circle mr-1"
                    src="./img/account-0.jpg"
                    alt=""
                    width="50"
                    height="50"
                />

                <div className="flex-grow-1">
                    <div>
                        <textarea
                            className="form-control shadow-none big"
                            placeholder="What's happening?"
                            value={post}
                            onChange={this.handleInputChange}
                            rows="1"
                        />
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <div>
                            <Button icon={photoSVG} />
                            <Button icon={gifSVG} />
                            <Button icon={pollSVG} />
                            <Button icon={emoticonSVG} />
                        </div>

                        <div
                            className="bg-secondary d-inline-block ml-auto mr-3"
                            style={{
                                width: 2,
                                height: 30,
                            }}
                        />
                        <div className="">
                            <Button
                                className="mr-2 small"
                                icon={addSVG}
                                outlined
                                disabled={post ? false : true}
                            />
                            <button
                                className={
                                    'btn btn-primary rounded-pill ' +
                                    (post ? '' : 'disabled')
                                }
                            >
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetComposer;
