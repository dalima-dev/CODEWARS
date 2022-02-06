const whosOnline = (friends) => {
    const obj = {
        online: friends.filter(x => x.status == 'online' && x.lastActivity <= 10).map(x => x.username),
        away: friends.filter(x => x.status == 'online' && x.lastActivity > 10).map(x => x.username),
        offline: friends.filter(x => x.status == 'offline').map(x => x.username),
    }
    if(obj.online.length == 0) delete obj.online;
    if(obj.offline.length == 0) delete obj.offline;
    if(obj.away.length == 0) delete obj.away;
    return obj;
  }