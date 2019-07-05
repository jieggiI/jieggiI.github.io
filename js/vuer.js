let user = get_request('https://api.github.com/users/jieggii');

let latest_commit = get_latest_commit();
let latest_follower = get_latest_follower(user.followers);
let latest_repository = get_latest_repo();
let latest_star = get_latest_star();
let all_repos = get_all_repos();
let latest_pull = get_latest_pull();
let latest_issue = get_latest_issue();


let latest_commit_vue = new Vue({
    el: '#latest-commit',
    data: latest_commit
});

let latest_follower_vue = new Vue({
    el: '#latest-follower',
    data: latest_follower
});

let latest_repo_vue = new Vue({
    el: '#latest-repo',
    data: latest_repository
});

let latest_star_vue = new Vue({
    el: '#latest-star',
    data: latest_star
});

let all_repos_vue = new Vue({
    el: '#all-repos',
    data: {
        'repos': all_repos
    }
});

let latest_pull_vue = new Vue({
    el: '#latest-pull',
    data: latest_pull
});

let latest_issue_vue = new Vue({
    el: '#latest-issue',
    data: latest_issue
});