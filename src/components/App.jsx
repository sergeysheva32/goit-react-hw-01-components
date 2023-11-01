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
      <Block nameBlock={"Task-1"}>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      </Block>
      <Block nameBlock={"Task-2"}>
        <Statistics title="Upload stats" stats={data} />
      </Block>
      <Block nameBlock={"Task-3"}>
        <FriendList friends={friends} />
      </Block>
      <Block nameBlock={"Task-4"}>
        <TransactionHistory transactions={transactions} />
      </Block>
    </div>
    
      
    
  );
};
