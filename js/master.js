let config = get('config.json');
let user_data = get('https://api.github.com/users/' + config['github-username']);

let user = {
    id: user_data['id'],
    username: user_data['login'],
    avatar: user_data['avatar_url'],
    href: 'https://github.com/' + user_data['username'],
    name: user_data['name'],
    followers_count: user_data['followers'],
    location: user_data['location'],
    repos: get(user_data['repos_url'])
};


let title = new Vue({
    el: '#title',
    data: {
        username: user.username
    }
});

let favicon = new Vue({
    el: '#favicon',
    data: {
        favicon: user.avatar
    }
});

let latest_repo = get_latest_repo(user.username);
let latest_commit = get_latest_commit(user.username);
let latest_follower = get_latest_follower(user.followers_count, user.username);

let app = new Vue({
    el: '#app',
    data: {
        username: user.username,
        avatar: user.avatar,
        location: user.location,
        name: user.name,
        user_url: user.href,
        social_media: config['social-media'],
        description: config['description'],
        status: config['status'],
        latest_commit_url: latest_commit.commit.url,
        latest_commit_repo_url: latest_commit.repo.url,
        latest_commit_repo: latest_commit.repo.name,
        latest_commit_date: latest_commit.date,
        latest_commit_message: latest_commit.commit.message,
        latest_repo_url: latest_repo.url,
        latest_repo_date: latest_repo.date,
        latest_repo_name: latest_repo.name,
        latest_follower_url: latest_follower.url,
        latest_follower_avatar: latest_follower.avatar,
        latest_follower_username: latest_follower.username,
        user_followers_count: user.followers_count,

    }
});