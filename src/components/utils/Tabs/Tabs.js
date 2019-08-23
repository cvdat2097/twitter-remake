import React, { useState, useEffect } from 'react';

import TabBody from './TabBody';

import './tabs.scss';

const TabHeader = props => {
    const { title, active, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={
                'tw-tab flex-grow-1 hoverable-primary clickable text-center py-2 ' +
                (active ? 'active' : '')
            }
            style={{ marginBottom: -1 }}
        >
            {title}
        </div>
    );
};

const Tabs = props => {
    const { children } = props;

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabHeaders, setTabHeaders] = useState([]);
    const [tabBodies, setTabBodies] = useState([]);

    const generateTabs = elements => {
        const tabHeaders = [];
        const tabBodies = [];

        React.Children.forEach(elements, (element, index) => {
            if (element.type === TabBody) {
                const { title, children } = element.props;
                const currentIndex = tabHeaders.length;

                tabHeaders.push(
                    <TabHeader
                        key={index}
                        title={title}
                        onClick={() => setActiveTabIndex(currentIndex)}
                    />
                );
                tabBodies.push(<TabBody key={index}>{children}</TabBody>);
            }
        });

        return { tabHeaders, tabBodies };
    };

    const getTabHeadersActive = (tabHeaders, activeIndex) => {
        return tabHeaders.map((tabHeader, index) => {
            if (index === activeIndex) {
                return React.cloneElement(tabHeader, { active: true });
            }

            return React.cloneElement(tabHeader, { active: false });
        });
    };

    useEffect(() => {
        const { tabHeaders, tabBodies } = generateTabs(children);

        setTabHeaders(tabHeaders);
        setTabBodies(tabBodies);
    }, [children]);

    return (
        <div className="tw-tabs">
            <div className="tabs-headers d-flex text-secondary border-bottom">
                {getTabHeadersActive(tabHeaders, activeTabIndex)}
            </div>

            {tabBodies[activeTabIndex]}
        </div>
    );
};

export default Tabs;
