<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <StackLayout>
            <Label class="info" horizontalAlignment="center" verticalAlignment="center">
                <FormattedString>
                    <Span class="fa" text.decode="&#xf135; "/>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
            <Button text="Click" @tap="clicked"/>
        </StackLayout>
    </Page>
</template>

<script>
import Test from './Test.vue';
    export default {
        computed: {
            message() {
                return "Home Screen";
            }
        },
        methods:{
            clicked()
            {
                console.log("Button Clicked");
                 this.$navigateTo(Test, { clearHistory: true });
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
