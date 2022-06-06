// Generated by quicktype.io using json schema provided by github api docs
// https://docs.github.com/en/rest/pulls/pulls#list-pull-requests

/**
 * Pull Request Simple
 */
export interface GithubPullsResponse {
    _links:              Links
    active_lock_reason?: null | string
    assignee:            null | PurpleSimpleUser
    assignees?:          AssigneeElement[] | null
    /**
     * How the author is associated with the repository.
     */
    author_association: AuthorAssociation
    /**
     * The status of auto merging a pull request.
     */
    auto_merge:   null | AutoMerge
    base:         Base
    body:         null | string
    closed_at:    Date | null
    comments_url: string
    commits_url:  string
    created_at:   Date
    diff_url:     string
    /**
     * Indicates whether or not the pull request is a draft.
     */
    draft?:               boolean
    head:                 Head
    html_url:             string
    id:                   number
    issue_url:            string
    labels:               Label[]
    locked:               boolean
    merge_commit_sha:     null | string
    merged_at:            Date | null
    milestone:            null | Milestone
    node_id:              string
    number:               number
    patch_url:            string
    requested_reviewers?: RequestedReviewerElement[] | null
    requested_teams?:     Team[] | null
    review_comment_url:   string
    review_comments_url:  string
    state:                string
    statuses_url:         string
    title:                string
    updated_at:           Date
    url:                  string
    user:                 null | StickySimpleUser
}

export interface Links {
    /**
     * Hypermedia Link
     */
    comments: CommentsObject
    /**
     * Hypermedia Link
     */
    commits: CommitsObject
    /**
     * Hypermedia Link
     */
    html: HTMLObject
    /**
     * Hypermedia Link
     */
    issue: IssueObject
    /**
     * Hypermedia Link
     */
    review_comment: ReviewCommentObject
    /**
     * Hypermedia Link
     */
    review_comments: ReviewCommentsObject
    /**
     * Hypermedia Link
     */
    self: SelfObject
    /**
     * Hypermedia Link
     */
    statuses: StatusesObject
}

/**
 * Hypermedia Link
 */
export interface CommentsObject {
    href: string
}

/**
 * Hypermedia Link
 */
export interface CommitsObject {
    href: string
}

/**
 * Hypermedia Link
 */
export interface HTMLObject {
    href: string
}

/**
 * Hypermedia Link
 */
export interface IssueObject {
    href: string
}

/**
 * Hypermedia Link
 */
export interface ReviewCommentObject {
    href: string
}

/**
 * Hypermedia Link
 */
export interface ReviewCommentsObject {
    href: string
}

/**
 * Hypermedia Link
 */
export interface SelfObject {
    href: string
}

/**
 * Hypermedia Link
 */
export interface StatusesObject {
    href: string
}

/**
 * Simple User
 */
export interface PurpleSimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * Simple User
 */
export interface AssigneeElement {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * How the author is associated with the repository.
 */
export enum AuthorAssociation {
    Collaborator = "COLLABORATOR",
    Contributor = "CONTRIBUTOR",
    FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
    FirstTimer = "FIRST_TIMER",
    Mannequin = "MANNEQUIN",
    Member = "MEMBER",
    None = "NONE",
    Owner = "OWNER",
}

export interface AutoMerge {
    /**
     * Commit message for the merge commit.
     */
    commit_message: string
    /**
     * Title for the merge commit message.
     */
    commit_title: string
    /**
     * Simple User
     */
    enabled_by: EnabledByObject
    /**
     * The merge method to use.
     */
    merge_method: MergeMethod
}

/**
 * Simple User
 */
export interface EnabledByObject {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * The merge method to use.
 */
export enum MergeMethod {
    Merge = "merge",
    Rebase = "rebase",
    Squash = "squash",
}

export interface Base {
    label: string
    ref:   string
    /**
     * A git repository
     */
    repo: BaseRepo
    sha:  string
    user: null | BaseSimpleUser
}

/**
 * A git repository
 */
export interface BaseRepo {
    /**
     * Whether to allow Auto-merge to be used on pull requests.
     */
    allow_auto_merge?: boolean
    /**
     * Whether to allow forking this repo
     */
    allow_forking?: boolean
    /**
     * Whether to allow merge commits for pull requests.
     */
    allow_merge_commit?: boolean
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allow_rebase_merge?: boolean
    /**
     * Whether to allow squash merges for pull requests.
     */
    allow_squash_merge?: boolean
    archive_url:         string
    /**
     * Whether the repository is archived.
     */
    archived:          boolean
    assignees_url:     string
    blobs_url:         string
    branches_url:      string
    clone_url:         string
    collaborators_url: string
    comments_url:      string
    commits_url:       string
    compare_url:       string
    contents_url:      string
    contributors_url:  string
    created_at:        Date | null
    /**
     * The default branch of the repository.
     */
    default_branch: string
    /**
     * Whether to delete head branches when pull requests are merged
     */
    delete_branch_on_merge?: boolean
    deployments_url:         string
    description:             null | string
    /**
     * Returns whether or not this repository disabled.
     */
    disabled:        boolean
    downloads_url:   string
    events_url:      string
    fork:            boolean
    forks:           number
    forks_count:     number
    forks_url:       string
    full_name:       string
    git_commits_url: string
    git_refs_url:    string
    git_tags_url:    string
    git_url:         string
    /**
     * Whether downloads are enabled.
     */
    has_downloads: boolean
    /**
     * Whether issues are enabled.
     */
    has_issues: boolean
    has_pages:  boolean
    /**
     * Whether projects are enabled.
     */
    has_projects: boolean
    /**
     * Whether the wiki is enabled.
     */
    has_wiki:  boolean
    homepage:  null | string
    hooks_url: string
    html_url:  string
    /**
     * Unique identifier of the repository
     */
    id: number
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    is_template?:      boolean
    issue_comment_url: string
    issue_events_url:  string
    issues_url:        string
    keys_url:          string
    labels_url:        string
    language:          null | string
    languages_url:     string
    license:           null | PurpleLicenseSimple
    master_branch?:    string
    merges_url:        string
    milestones_url:    string
    mirror_url:        null | string
    /**
     * The name of the repository.
     */
    name:              string
    network_count?:    number
    node_id:           string
    notifications_url: string
    open_issues:       number
    open_issues_count: number
    organization?:     null | FluffySimpleUser
    /**
     * Simple User
     */
    owner:        IndigoSimpleUser
    permissions?: PurplePermissions
    /**
     * Whether the repository is private or public.
     */
    private:              boolean
    pulls_url:            string
    pushed_at:            Date | null
    releases_url:         string
    size:                 number
    ssh_url:              string
    stargazers_count:     number
    stargazers_url:       string
    starred_at?:          string
    statuses_url:         string
    subscribers_count?:   number
    subscribers_url:      string
    subscription_url:     string
    svn_url:              string
    tags_url:             string
    teams_url:            string
    temp_clone_token?:    string
    template_repository?: null | PurpleTemplateRepository
    topics?:              string[]
    trees_url:            string
    updated_at:           Date | null
    url:                  string
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?:    string
    watchers:       number
    watchers_count: number
}

/**
 * License Simple
 */
export interface PurpleLicenseSimple {
    html_url?: string
    key:       string
    name:      string
    node_id:   string
    spdx_id:   null | string
    url:       null | string
}

/**
 * Simple User
 */
export interface FluffySimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * Simple User
 */
export interface IndigoSimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

export interface PurplePermissions {
    admin:     boolean
    maintain?: boolean
    pull:      boolean
    push:      boolean
    triage?:   boolean
}

export interface PurpleTemplateRepository {
    allow_auto_merge?:       boolean
    allow_merge_commit?:     boolean
    allow_rebase_merge?:     boolean
    allow_squash_merge?:     boolean
    allow_update_branch?:    boolean
    archive_url?:            string
    archived?:               boolean
    assignees_url?:          string
    blobs_url?:              string
    branches_url?:           string
    clone_url?:              string
    collaborators_url?:      string
    comments_url?:           string
    commits_url?:            string
    compare_url?:            string
    contents_url?:           string
    contributors_url?:       string
    created_at?:             string
    default_branch?:         string
    delete_branch_on_merge?: boolean
    deployments_url?:        string
    description?:            string
    disabled?:               boolean
    downloads_url?:          string
    events_url?:             string
    fork?:                   boolean
    forks_count?:            number
    forks_url?:              string
    full_name?:              string
    git_commits_url?:        string
    git_refs_url?:           string
    git_tags_url?:           string
    git_url?:                string
    has_downloads?:          boolean
    has_issues?:             boolean
    has_pages?:              boolean
    has_projects?:           boolean
    has_wiki?:               boolean
    homepage?:               string
    hooks_url?:              string
    html_url?:               string
    id?:                     number
    is_template?:            boolean
    issue_comment_url?:      string
    issue_events_url?:       string
    issues_url?:             string
    keys_url?:               string
    labels_url?:             string
    language?:               string
    languages_url?:          string
    merges_url?:             string
    milestones_url?:         string
    mirror_url?:             string
    name?:                   string
    network_count?:          number
    node_id?:                string
    notifications_url?:      string
    open_issues_count?:      number
    owner?:                  PurpleOwner
    permissions?:            FluffyPermissions
    private?:                boolean
    pulls_url?:              string
    pushed_at?:              string
    releases_url?:           string
    size?:                   number
    ssh_url?:                string
    stargazers_count?:       number
    stargazers_url?:         string
    statuses_url?:           string
    subscribers_count?:      number
    subscribers_url?:        string
    subscription_url?:       string
    svn_url?:                string
    tags_url?:               string
    teams_url?:              string
    temp_clone_token?:       string
    topics?:                 string[]
    trees_url?:              string
    updated_at?:             string
    url?:                    string
    visibility?:             string
    watchers_count?:         number
}

export interface PurpleOwner {
    avatar_url?:          string
    events_url?:          string
    followers_url?:       string
    following_url?:       string
    gists_url?:           string
    gravatar_id?:         string
    html_url?:            string
    id?:                  number
    login?:               string
    node_id?:             string
    organizations_url?:   string
    received_events_url?: string
    repos_url?:           string
    site_admin?:          boolean
    starred_url?:         string
    subscriptions_url?:   string
    type?:                string
    url?:                 string
}

export interface FluffyPermissions {
    admin?:    boolean
    maintain?: boolean
    pull?:     boolean
    push?:     boolean
    triage?:   boolean
}

/**
 * Simple User
 */
export interface BaseSimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

export interface Head {
    label: string
    ref:   string
    /**
     * A git repository
     */
    repo: HeadRepo
    sha:  string
    user: null | HeadSimpleUser
}

/**
 * A git repository
 */
export interface HeadRepo {
    /**
     * Whether to allow Auto-merge to be used on pull requests.
     */
    allow_auto_merge?: boolean
    /**
     * Whether to allow forking this repo
     */
    allow_forking?: boolean
    /**
     * Whether to allow merge commits for pull requests.
     */
    allow_merge_commit?: boolean
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allow_rebase_merge?: boolean
    /**
     * Whether to allow squash merges for pull requests.
     */
    allow_squash_merge?: boolean
    archive_url:         string
    /**
     * Whether the repository is archived.
     */
    archived:          boolean
    assignees_url:     string
    blobs_url:         string
    branches_url:      string
    clone_url:         string
    collaborators_url: string
    comments_url:      string
    commits_url:       string
    compare_url:       string
    contents_url:      string
    contributors_url:  string
    created_at:        Date | null
    /**
     * The default branch of the repository.
     */
    default_branch: string
    /**
     * Whether to delete head branches when pull requests are merged
     */
    delete_branch_on_merge?: boolean
    deployments_url:         string
    description:             null | string
    /**
     * Returns whether or not this repository disabled.
     */
    disabled:        boolean
    downloads_url:   string
    events_url:      string
    fork:            boolean
    forks:           number
    forks_count:     number
    forks_url:       string
    full_name:       string
    git_commits_url: string
    git_refs_url:    string
    git_tags_url:    string
    git_url:         string
    /**
     * Whether downloads are enabled.
     */
    has_downloads: boolean
    /**
     * Whether issues are enabled.
     */
    has_issues: boolean
    has_pages:  boolean
    /**
     * Whether projects are enabled.
     */
    has_projects: boolean
    /**
     * Whether the wiki is enabled.
     */
    has_wiki:  boolean
    homepage:  null | string
    hooks_url: string
    html_url:  string
    /**
     * Unique identifier of the repository
     */
    id: number
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    is_template?:      boolean
    issue_comment_url: string
    issue_events_url:  string
    issues_url:        string
    keys_url:          string
    labels_url:        string
    language:          null | string
    languages_url:     string
    license:           null | FluffyLicenseSimple
    master_branch?:    string
    merges_url:        string
    milestones_url:    string
    mirror_url:        null | string
    /**
     * The name of the repository.
     */
    name:              string
    network_count?:    number
    node_id:           string
    notifications_url: string
    open_issues:       number
    open_issues_count: number
    organization?:     null | TentacledSimpleUser
    /**
     * Simple User
     */
    owner:        IndecentSimpleUser
    permissions?: TentacledPermissions
    /**
     * Whether the repository is private or public.
     */
    private:              boolean
    pulls_url:            string
    pushed_at:            Date | null
    releases_url:         string
    size:                 number
    ssh_url:              string
    stargazers_count:     number
    stargazers_url:       string
    starred_at?:          string
    statuses_url:         string
    subscribers_count?:   number
    subscribers_url:      string
    subscription_url:     string
    svn_url:              string
    tags_url:             string
    teams_url:            string
    temp_clone_token?:    string
    template_repository?: null | FluffyTemplateRepository
    topics?:              string[]
    trees_url:            string
    updated_at:           Date | null
    url:                  string
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?:    string
    watchers:       number
    watchers_count: number
}

/**
 * License Simple
 */
export interface FluffyLicenseSimple {
    html_url?: string
    key:       string
    name:      string
    node_id:   string
    spdx_id:   null | string
    url:       null | string
}

/**
 * Simple User
 */
export interface TentacledSimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * Simple User
 */
export interface IndecentSimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

export interface TentacledPermissions {
    admin:     boolean
    maintain?: boolean
    pull:      boolean
    push:      boolean
    triage?:   boolean
}

export interface FluffyTemplateRepository {
    allow_auto_merge?:       boolean
    allow_merge_commit?:     boolean
    allow_rebase_merge?:     boolean
    allow_squash_merge?:     boolean
    allow_update_branch?:    boolean
    archive_url?:            string
    archived?:               boolean
    assignees_url?:          string
    blobs_url?:              string
    branches_url?:           string
    clone_url?:              string
    collaborators_url?:      string
    comments_url?:           string
    commits_url?:            string
    compare_url?:            string
    contents_url?:           string
    contributors_url?:       string
    created_at?:             string
    default_branch?:         string
    delete_branch_on_merge?: boolean
    deployments_url?:        string
    description?:            string
    disabled?:               boolean
    downloads_url?:          string
    events_url?:             string
    fork?:                   boolean
    forks_count?:            number
    forks_url?:              string
    full_name?:              string
    git_commits_url?:        string
    git_refs_url?:           string
    git_tags_url?:           string
    git_url?:                string
    has_downloads?:          boolean
    has_issues?:             boolean
    has_pages?:              boolean
    has_projects?:           boolean
    has_wiki?:               boolean
    homepage?:               string
    hooks_url?:              string
    html_url?:               string
    id?:                     number
    is_template?:            boolean
    issue_comment_url?:      string
    issue_events_url?:       string
    issues_url?:             string
    keys_url?:               string
    labels_url?:             string
    language?:               string
    languages_url?:          string
    merges_url?:             string
    milestones_url?:         string
    mirror_url?:             string
    name?:                   string
    network_count?:          number
    node_id?:                string
    notifications_url?:      string
    open_issues_count?:      number
    owner?:                  FluffyOwner
    permissions?:            StickyPermissions
    private?:                boolean
    pulls_url?:              string
    pushed_at?:              string
    releases_url?:           string
    size?:                   number
    ssh_url?:                string
    stargazers_count?:       number
    stargazers_url?:         string
    statuses_url?:           string
    subscribers_count?:      number
    subscribers_url?:        string
    subscription_url?:       string
    svn_url?:                string
    tags_url?:               string
    teams_url?:              string
    temp_clone_token?:       string
    topics?:                 string[]
    trees_url?:              string
    updated_at?:             string
    url?:                    string
    visibility?:             string
    watchers_count?:         number
}

export interface FluffyOwner {
    avatar_url?:          string
    events_url?:          string
    followers_url?:       string
    following_url?:       string
    gists_url?:           string
    gravatar_id?:         string
    html_url?:            string
    id?:                  number
    login?:               string
    node_id?:             string
    organizations_url?:   string
    received_events_url?: string
    repos_url?:           string
    site_admin?:          boolean
    starred_url?:         string
    subscriptions_url?:   string
    type?:                string
    url?:                 string
}

export interface StickyPermissions {
    admin?:    boolean
    maintain?: boolean
    pull?:     boolean
    push?:     boolean
    triage?:   boolean
}

/**
 * Simple User
 */
export interface HeadSimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

export interface Label {
    color:       string
    default:     boolean
    description: string
    id:          number
    name:        string
    node_id:     string
    url:         string
}

/**
 * A collection of related issues and pull requests.
 */
export interface Milestone {
    closed_at:     Date | null
    closed_issues: number
    created_at:    Date
    creator:       null | MilestoneSimpleUser
    description:   null | string
    due_on:        Date | null
    html_url:      string
    id:            number
    labels_url:    string
    node_id:       string
    /**
     * The number of the milestone.
     */
    number:      number
    open_issues: number
    /**
     * The state of the milestone.
     */
    state: State
    /**
     * The title of the milestone.
     */
    title:      string
    updated_at: Date
    url:        string
}

/**
 * Simple User
 */
export interface MilestoneSimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * The state of the milestone.
 */
export enum State {
    Closed = "closed",
    Open = "open",
}

/**
 * Simple User
 */
export interface RequestedReviewerElement {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export interface Team {
    description:      null | string
    html_url:         string
    id:               number
    members_url:      string
    name:             string
    node_id:          string
    parent:           null | TeamSimple
    permission:       string
    permissions?:     RequestedTeamPermissions
    privacy?:         string
    repositories_url: string
    slug:             string
    url:              string
}

/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export interface TeamSimple {
    /**
     * Description of the team
     */
    description: null | string
    html_url:    string
    /**
     * Unique identifier of the team
     */
    id: number
    /**
     * Distinguished Name (DN) that team maps to within LDAP environment
     */
    ldap_dn?:    string
    members_url: string
    /**
     * Name of the team
     */
    name:    string
    node_id: string
    /**
     * Permission that the team will have for its repositories
     */
    permission: string
    /**
     * The level of privacy this team should have
     */
    privacy?:         string
    repositories_url: string
    slug:             string
    /**
     * URL for the team
     */
    url: string
}

export interface RequestedTeamPermissions {
    admin:    boolean
    maintain: boolean
    pull:     boolean
    push:     boolean
    triage:   boolean
}

/**
 * Simple User
 */
export interface StickySimpleUser {
    avatar_url:          string
    email?:              null | string
    events_url:          string
    followers_url:       string
    following_url:       string
    gists_url:           string
    gravatar_id:         null | string
    html_url:            string
    id:                  number
    login:               string
    name?:               null | string
    node_id:             string
    organizations_url:   string
    received_events_url: string
    repos_url:           string
    site_admin:          boolean
    starred_at?:         string
    starred_url:         string
    subscriptions_url:   string
    type:                string
    url:                 string
}

/**
 * Commit
 */
export interface GithubCommitsResponse {
    author:       null | PurpleSimpleUser;
    comments_url: string;
    commit:       Commit;
    committer:    null | FluffySimpleUser;
    files?:       DiffEntry[];
    html_url:     string;
    node_id:      string;
    parents:      Parent[];
    sha:          string;
    stats?:       Stats;
    url:          string;
}

/**
 * Simple User
 */
export interface PurpleSimpleUser {
    avatar_url:          string;
    email?:              null | string;
    events_url:          string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    gravatar_id:         null | string;
    html_url:            string;
    id:                  number;
    login:               string;
    name?:               null | string;
    node_id:             string;
    organizations_url:   string;
    received_events_url: string;
    repos_url:           string;
    site_admin:          boolean;
    starred_at?:         string;
    starred_url:         string;
    subscriptions_url:   string;
    type:                string;
    url:                 string;
}

export interface Commit {
    author:        null | PurpleGitUser;
    comment_count: number;
    committer:     null | FluffyGitUser;
    message:       string;
    tree:          Tree;
    url:           string;
    verification?: Verification;
}

/**
 * Metaproperties for Git author/committer information.
 */
export interface PurpleGitUser {
    date?:  string;
    email?: string;
    name?:  string;
}

/**
 * Metaproperties for Git author/committer information.
 */
export interface FluffyGitUser {
    date?:  string;
    email?: string;
    name?:  string;
}

export interface Tree {
    sha: string;
    url: string;
}

export interface Verification {
    payload:   null | string;
    reason:    string;
    signature: null | string;
    verified:  boolean;
}

/**
 * Simple User
 */
export interface FluffySimpleUser {
    avatar_url:          string;
    email?:              null | string;
    events_url:          string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    gravatar_id:         null | string;
    html_url:            string;
    id:                  number;
    login:               string;
    name?:               null | string;
    node_id:             string;
    organizations_url:   string;
    received_events_url: string;
    repos_url:           string;
    site_admin:          boolean;
    starred_at?:         string;
    starred_url:         string;
    subscriptions_url:   string;
    type:                string;
    url:                 string;
}

/**
 * Diff Entry
 */
export interface DiffEntry {
    additions:          number;
    blob_url:           string;
    changes:            number;
    contents_url:       string;
    deletions:          number;
    filename:           string;
    patch?:             string;
    previous_filename?: string;
    raw_url:            string;
    sha:                string;
    status:             Status;
}

export enum Status {
    Added = "added",
    Changed = "changed",
    Copied = "copied",
    Modified = "modified",
    Removed = "removed",
    Renamed = "renamed",
    Unchanged = "unchanged",
}

export interface Parent {
    html_url?: string;
    sha:       string;
    url:       string;
}

export interface Stats {
    additions?: number;
    deletions?: number;
    total?:     number;
}