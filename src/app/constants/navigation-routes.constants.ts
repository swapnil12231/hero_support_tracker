export const rootNavigationRoutes = Object.freeze({
    login: 'login',
    resetPassword: 'reset-password',
    forgotPassword: 'forgot-password',
    dashboard: 'dashboard',
    campaign: 'campaign',
    campaigns: 'campaigns',
    configuration: 'configuration',
    deletedData: 'deleted-data',
    license: 'license',
    manageLeads: 'manage-leads',
    socialMedia: 'social-media',
    userManagement: 'user-management',
    voiceServer: 'voice-server',
    overview: 'overview',
    realTime: 'real-time',
    reports: 'reports',
    ivrDesign: 'ivr-design',
    wfm: 'wfm',
    disposition: 'disposition',
    queue: 'queue',
    crm: 'crm',
    debugCampaign: 'debug-campaign',

    // user-management
    users:'users',
    userGroups:'user-groups',
    skillSet:'skill-set',
    extension:'extension',
    pauseCode:'pause-code',
    role:'role',

    // voice-sever
    soundFile:'sound-file',
    musicOnHold:'music-on-hold',
    trunk:'trunk',
    voiceServers:'voice-server',
    recording:'recording'


})

export const navigationRoutes = Object.freeze({
    login: `/${rootNavigationRoutes.login}`,
    resetPassword: `/${rootNavigationRoutes.resetPassword}`,
    forgotPassword: `/${rootNavigationRoutes.forgotPassword}`,
    dashboard: `/${rootNavigationRoutes.dashboard}`,
    campaign: `${rootNavigationRoutes.campaign}`,
    configuration: `/${rootNavigationRoutes.configuration}`,
    deletedData: `/${rootNavigationRoutes.deletedData}`,
    license: `/${rootNavigationRoutes.license}`,
    manageLeads: `/${rootNavigationRoutes.manageLeads}`,
    socialMedia: `/${rootNavigationRoutes.socialMedia}`,
    userManagement: `/${rootNavigationRoutes.userManagement}`,
    voiceServer: `/${rootNavigationRoutes.voiceServer}`,
    overview: `/${rootNavigationRoutes.overview}`,
    realTime: `/${rootNavigationRoutes.realTime}`,
    reports: `/${rootNavigationRoutes.reports}`,
    ivrDesign: `/${rootNavigationRoutes.ivrDesign}`,
    wfm: `/${rootNavigationRoutes.wfm}`,
    disposition: `/${rootNavigationRoutes.disposition}`,
    queue: `/${rootNavigationRoutes.queue}`,
    crm: `/${rootNavigationRoutes.crm}`,
    debugCampaign: `/${rootNavigationRoutes.debugCampaign}`,


    // user-management
    users:`/${rootNavigationRoutes.users}`,
    userGroups:`/${rootNavigationRoutes.userGroups}`,
    skillSet:`/${rootNavigationRoutes.skillSet}`,
    extension:`/${rootNavigationRoutes.extension}`,
    pauseCode:`/${rootNavigationRoutes.pauseCode}`,
    role:`/${rootNavigationRoutes.role}`,

    // voice-server 
    soundFile:`${rootNavigationRoutes.soundFile}`, 
    musicOnHold:`${rootNavigationRoutes.musicOnHold}`, 
    trunk:`${rootNavigationRoutes.trunk}`, 
    voiceServers:`${rootNavigationRoutes.voiceServers}`, 
    recording:`${rootNavigationRoutes.recording}`, 
})