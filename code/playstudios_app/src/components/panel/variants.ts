//Declare variants types
export type Variant = 'default' | 'limit' | 'modal' | 'form' | 'formSecondary' | 'box' | 'field' | undefined;

//declare variant styles default default
export const variantStyle = (theme: any, variant: Variant) => {
    switch (variant) {
        case 'form':
            return formVariant
        case 'formSecondary':
            return formVariant
        case 'limit':
            return {
                root: {

                },

                appBar: {
                    background: "white",
                    boxShadow: 'none',
                },
                toolbar: {
                    background: theme.palette.background.secondary,
                    minHeight: 44,
                    paddingTop: 10,
                    paddingBottom: 10,
                },
                grid: {
                    padding: '0px 18px',
                    paddingBottom: '26px',
                },
                box: {
                    height: '400px',
                    width: '100%',
                    overflow: 'auto'
                }
            };
        case 'box':
            return {
                root: {

                },
                appBar: {
                    background: "white",
                    boxShadow: 'none',
                },
                toolbar: {
                    background: theme.palette.background.secondary,
                    minHeight: 44,
                    paddingTop: 10,
                    paddingBottom: 10,
                },
                grid: {
                    padding: '0px 18px',
                    paddingBottom: '26px',
                },
                box: {
                }
            };
        case 'modal':
            return {
                root: {
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 90 + 'vw',
                    bgcolor: 'background.paper',
                    borderRadius: '6px',
                    overflow: 'hidden'
                },

                appBar: {
                    background: "white",
                    boxShadow: 'none',
                },
                toolbar: {
                    background: theme.palette.background.secondary,
                    minHeight: 44,
                    paddingTop: 10,
                    paddingBottom: 10,
                },
                grid: {
                    padding: '16px 24px',
                },
                box: {
                    width: '100%',
                    overflow: 'auto'
                }
            };
            case 'field':
                return {
                    root: {
                        border:"1px solid #D8D8D8",
                        borderRadius: '3px',
                        overflow: 'hidden',
                    },
    
                    appBar: {
                        background: "white",
                        boxShadow: 'none',
                    },
                    toolbar: {
                        background: theme.palette.background.secondary,
                        minHeight: 44,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 20,
                        paddingLight: 20
                    },
                    grid: {
                        padding: '14px 16px',
                    },
                    box: {
                        width: '100%',
                        overflow: 'auto'
                    }
                };
        default:
            return {
                appBar: {
                    background: "white",
                    boxShadow: 'none',
                },
                toolbar: {
                    background: theme.palette.background.secondary,
                    minHeight: 44,
                    paddingTop: 4,
                    paddingBottom: 4,
                },
                grid: {
                    padding: '0px',
                },
                box: {
                    width: '100%',
                    overflow: 'auto'
                }
            };
    }
};

const formVariant = {
    root: {

    },

    appBar: {
        background: "white",
        boxShadow: 'none',
        textAlign: 'left' as 'left',
    },
    toolbar: {
        background: 'white',
        minHeight: 35,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 0,
        paddingRight: 0
    },
    grid: {
        padding: '0px',
    },
    box: {
        width: '100%',
        overflow: 'auto'
    }
}