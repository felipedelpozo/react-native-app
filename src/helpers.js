import moment from 'moment';

export const getRelativeTime = (date) => moment(date).calendar();
