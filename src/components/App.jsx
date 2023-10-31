import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

import Block from './Block/Block';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendListItem/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';


export default function App() {
  return (
    <div>
      <Block title={"Task-1"}>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      </Block>
      <Block title={"Task-2"}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Block>
      <Block title={"Task-3"}>
        <FriendList friends={friends} />
      </Block>
      <Block title={"Task-4"}>
        <TransactionHistory transactions={transactions} />
      </Block>
    </div>
    
      
    
  );
};
