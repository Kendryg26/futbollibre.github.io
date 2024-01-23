$(function () {
        var menu_ul = $('.menu > li > ul'),
            menu_a = $('.menu > li > a');

        menu_ul.hide();

        menu_a.click(function (e) {
            e.preventDefault();
            if (!$(this).hasClass('active')) {
                menu_a.removeClass('active');
                menu_ul.filter(':visible').slideUp('fast');
                $(this).addClass('active').next().stop(true, true).slideDown('fast');
            } else {
                $(this).removeClass('active');
                $(this).next().stop(true, true).slideUp('fast');
            }
        });

        // Script para agregar enlaces automÃƒÂ¡ticamente
        var enlaces = {
            'ESPN AR': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90ZXN0Y2wucGhwP3VybD1hSFIwY0hNNkx5OWhjbXh2WTJGc2JHbDJaV05vWVc1dVpXeHpaR0Z6YUM1c1kyUnVMbU5zWVhKdmRIWXVZMjl0TG1GeUwwTnZiblJsYm5RdlJFRlRTRjlFUVZOSVgwWkxMMHhwZG1VdlkyaGhibTVsYkNoRlUxQk9LUzl0WVhOMFpYSXViWEJrJmsxPVpUSTNNREV4T1RSaE5UVXhaRE13WWpNMVlUZGtORGt6T1RNM1pUVXdaakU9JmsyPU16Z3labVl3TVRVeU1qYzRaRGhpWVRrME5tUTBabVE0TW1Fd09XSXlNVEk9', calidad: '1080p' },
            'ESPN CO': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1hSFIwY0hNNkx5OXNZWFJoYlhadmMyeHBkbVZqYkdGeWIzWnBaR1Z2TG1GcllXMWhhWHBsWkM1dVpYUXZRMjl1ZEdWdWRDOUVRVk5JWDBSQlUwaGZSa3N2VEdsMlpTOURhR0Z1Ym1Wc0tFVlRVRTVmTWw5SVJDa3ZiV0Z1YVdabGMzUXViWEJrJmsxPU9HUTNZMkk0Wm1Kak9ERmpaak5sWkdSbU9HVmlZalZrWWpWbE1URXlPREk9JmsyPVlqZGhPVGc0TVRKaFlqaGtPRGszTkRZME9XRTJaV00wTWpCak1ERXpaVEU9', calidad: '1080p' },

            
            'ESPN 2 CO': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1MeTlzWVhSaGJYWnZjMnhwZG1WamJHRnliM1pwWkdWdkxtRnJZVzFoYVhwbFpDNXVaWFF2UTI5dWRHVnVkQzlFUVZOSVgwUkJVMGhmUmtzdlRHbDJaUzlEYUdGdWJtVnNLRVZUVUU1ZlNFUXBMMjFoYm1sbVpYTjBMbTF3WkE9PSZrMT1NR1k0TldFMFpURm1ZelU1TXpkaE9ESTNNekV6TlRrM1pEQTBaamhsTWpjPSZrMj1ZMk14WkRneU1UbGlaVEF4TXpCa1lUZzFaVFJqTkdObE56TmhOelZoWW1JPQ==', calidad: '1080p' },
'ESPN 2 MX': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vQ2FuYWxlc2Fkcy9lc3BuMm14LnBocA==', calidad: '720p' },
            'ESPN 2 AR': { link: '/en-live/ESPN2.html', calidad: '720p' },
     
            'ESPN 3 CO': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90ZXN0Y2wucGhwP3VybD1hSFIwY0hNNkx5OWhjbXh2WTJGc2JHbDJaV05vWVc1dVpXeHpaR0Z6YUM1c1kyUnVMbU5zWVhKdmRIWXVZMjl0TG1GeUwwTnZiblJsYm5RdlJFRlRTRjlFUVZOSVgwWkxMMHhwZG1VdlkyaGhibTVsYkNoRlUxQk9NeWt2YldGemRHVnlMbTF3WkE9PSZrMT1NV0kyTkRVeE9EVmpaRFl5WkRnNE1XWmhPVEZtWkRreU1UY3dOamt3WldFPSZrMj1aVFZtTnpVNVpUSTFObU0zTmpoak5qTTBPV1JsWWpsall6UTBObU5oWW1VPQ==', calidad: '1080p' },
            'ESPN 4': { link: '/en-live/ESPN4.html', calidad: '1080p' },
            'ESPN EXTRA': { link: '/en-live/ESPNEXTRA.html', calidad: '1080p' },
            'ESPN Premiun': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vQ2FuYWxlc2Fkcy9lc3BucHJlbWl1bi5waHA=', calidad: '720p' },
           
            'Fox Sports MX': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1hSFIwY0hNNkx5OXNZWFJoYlhadmMyeHBkbVZqYkdGeWIzWnBaR1Z2TG1GcllXMWhhWHBsWkM1dVpYUXZRMjl1ZEdWdWRDOUVRVk5JWDBSQlUwaGZSa3N2VEdsMlpTOURhR0Z1Ym1Wc0tFWlBXRk5RTVUxWVNFUXBMMjFoYm1sbVpYTjBMbTF3WkE9PSZrMT1OVEV4TWpRelpUSXpZbUptTkdaak5ESmxPR0psTXpobFlqQTJabVEwWW1RPSZrMj1ORFJtTldRM056azNPREZtWWpZM1pHTXdZVGxpWkdGa1lqZ3lNVFF6Tm1NPQ==', calidad: '1080p' },
           
            'Fox Sports 2 CO': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1MeTlzWVhSaGJYWnZjMnhwZG1WamJHRnliM1pwWkdWdkxtRnJZVzFoYVhwbFpDNXVaWFF2UTI5dWRHVnVkQzlFUVZOSVgwUkJVMGhmUmtzdlRHbDJaUzlEYUdGdWJtVnNLRVpQV0Y5VFVFOVNWRk15WDBoRUtTOXRZVzVwWm1WemRDNXRjR1E9JmsxPU5Ea3dNakJtWm1NNFlqVmpZelUwTW1NME5qa3pOekJqTkRBd01EQTFOalU9JmsyPU9HVmhOREk1TWpVNE5tUTBaR1l6WVdJMFpXWXhOek0wTlRObU5tTTFOVFU9', calidad: '1080p' },
            'Fox Sports 2 MX': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1hSFIwY0hNNkx5OXNZWFJoYlhadmMyeHBkbVZqYkdGeWIzWnBaR1Z2TG1GcllXMWhhWHBsWkM1dVpYUXZRMjl1ZEdWdWRDOUVRVk5JWDBSQlUwaGZSa3N2VEdsMlpTOURhR0Z1Ym1Wc0tFWlBXRk5RTWsxWVNFUXBMMjFoYm1sbVpYTjBMbTF3WkE9PSZrMT1ZalZqWXpoaU5UUTFZekpqTVRZM1pqQTBZVEZrT1RnME9UUmxNVEpqTWpFPSZrMj1ZV1JtWXpsalpEQXpZekZpWW1GbVkyVXhOalk0TURWbE9HUmhPRFF3TVdNPQ==', calidad: '1080p' },
            'Fox Sports 3': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1MeTlzWVhSaGJYWnZjMnhwZG1WamJHRnliM1pwWkdWdkxtRnJZVzFoYVhwbFpDNXVaWFF2UTI5dWRHVnVkQzlFUVZOSVgwUkJVMGhmUmtzdlRHbDJaUzlEYUdGdWJtVnNLRVpQV0Y5VFVFOVNWRk16WDBoRUtTOXRZVzVwWm1WemRDNXRjR1E9JmsxPU9EVTVZVGRsWmpkbE9UWTVZVEJoWlRrMU9EUXdNRFZoT0dJMk5ESm1aRFk9JmsyPVlUa3dZMkV3WkdVeE5HTmpNV1ZoTWpNd05XSmlNalpqWlRFNFpESmhZbVU9', calidad: '1080p' },
            'Fox Sports 3 MX': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1hSFIwY0hNNkx5OXNZWFJoYlhadmMyeHBkbVZqYkdGeWIzWnBaR1Z2TG1GcllXMWhhWHBsWkM1dVpYUXZRMjl1ZEdWdWRDOUVRVk5JWDBSQlUwaGZSa3N2VEdsMlpTOURhR0Z1Ym1Wc0tFWlBXRk5RTTAxWVNFUXBMMjFoYm1sbVpYTjBMbTF3WkE9PSZrMT1PR1V6TldJeE1EUm1Zems1TVRBMU5XVmpOamd5WXpRMk5UTmxPV0V4T0RnPSZrMj1PV1EzTmpOa1l6RmpPVEl5Wm1KbE56RTRNbVkwWVdNek1Ua3daRGRqWW1FPQ==', calidad: '1080p' },
            'Fox Sports Premiun MX': { link: '/en-live/FOXpre.html', calidad: '1080p' },
            'DSports': { link: '/en-live/Dsport.html', calidad: '720p' },
            'DSports 2': { link: '/en-live/Dsport2.html', calidad: '720p' },
            'DSports +': { link: '/en-live/Dsportplus.html', calidad: '720p' },
            'TNT Sports AR': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vQ2FuYWxlc2Fkcy90bnRhci5waHA=', calidad: '720p' },

            'Tyc Sports': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vQ2FuYWxlc2Fkcy90eWNzcG9ydHMucGhw', calidad: '720p' },
            'VTV+': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vQ2FuYWxlc2Fkcy92dHYrLnBocA==', calidad: '720p' },
            'Eleven Sports 1 PT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTA1NA==', calidad: '1080p' },
            'Eleven Sports 2 PT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTA1NQ==', calidad: '1080p' },
            'Eleven Sports 3 PT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTA1Ng==', calidad: '1080p' },
            'Eleven Sports 4 PT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTA1Nw==', calidad: '1080p' },
            'Eleven Sports 5 PT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTA1OA==', calidad: '1080p' },
            'Eleven Sports 6 PT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTA1OQ==', calidad: '1080p' },
            'Eleven Sports 1 BE': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlrWTJVdFlXc3RiR2wyWlhkM1pHRjZiaTVoYTJGdFlXbDZaV1F1Ym1WMEwyUmhjMmhrY20wdlpHRjZiaTFzYVc1bFlYSXRNRFE0TDNOMGNtVmhiUzV0Y0dRJmsxPU9ESm1PR1V5WVRFM1pHRmpORFJqTUdFeE9HWTJOakEwTnprek5EbGpOVGsmazI9TVdJeE5EUm1Oek5sTm1abFptVTVNV05rTURWbU9EVXdaVEppTlRnNVpEQQ==', calidad: '1080p' },
            'DAZN 1 DE': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTAxNw==', calidad: '1080p' },
            'DAZN 2 DE': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTAxOA==', calidad: '1080p' },
            'Zona DAZN IT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTAyNA==', calidad: '1080p' },
            'DAZN LaLiga ES ': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVhabExteHNMbmQzTG1GcGRpMWpaRzR1Ym1WMEwwOVVWRUl2WkhWaUxXNXBkSEp2TDJ4cGRtVXZZMnhwWlc1MGN5OWtZWE5vTDJWdVl5OTNhbWRyYkdKMGRtaG9MMjkxZEM5Mk1TODJOVGszTXpaaE1XVXlOR00wTUdVME9EWTFZVGd3Wm1aa056VmxOMlJsTnk5alpXNWpMbTF3WkE9PSZrMT1ORE5rTVdNellqSTFNakEzWm1Zek9HSXlNbU5qWm1VeE4yUXpNREl6TmpjPSZrMj1OMkl4WmpnMVpqWmxPREV3TlRrME56TmlNVEUwWXpFMllUSTFZemd5T1dFPQ==', calidad: '1080p' },
            'DAZN 1 ES': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTAzNw==', calidad: '1080p' },
            'DAZN 2 ES': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTAzOA==', calidad: '1080p' },
            'Euro Sports 2 ES': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTAzMg==', calidad: '1080p' },
            'Sportdigital FuÃƒÅ¸ball DE': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS90b2tlbmRhem4ucGhwP2lkPTAyMg==', calidad: '1080p' },
            'Ziggo Sport Select NL': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTkzY0MxdlltTTBMV3hwZG1VdGJtd3RjSEp2WkM1d2NtOWtMbU5rYmk1a2JXUnpaSEF1WTI5dEwyUmhjMmd2WjI4dFpHRnphQzFvWkhKbFlXUjVMV0YyWXk5T1RGOHdNREF3TVRSZk1ERTVOall4TDIxaGJtbG1aWE4wTG0xd1pBPT0mazE9T1RCbE16SmhORGN4TW1ZMU5EZ3dZbUZpTjJGaVl6aGhOR1psWmpJMVpHRT0mazI9TW1WbFlqUTVZVGcyT0RobU1qTTJOV1V4TVRNeFkyWTBZV1UwWkRabU1HRT0=', calidad: '1080p' },
            'Ziggo Sport Docu NL': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlrWVMxa05ETTJNak0wWWpJd01ERXdZamc0TURBd01UQXpNREl3TURBd01EQXdNREF3TURBd01EQmtMbWxrTG1Oa2JpNTFjR05pY205aFpHSmhibVF1WTI5dEwzZHdMM2R3TFc5aVl6VXRiR2wyWlMxdWJDMXdjbTlrTG5CeWIyUXVZMlJ1TG1SdFpITmtjQzVqYjIwdlpHRnphQzlPVEY4d01EQXdPVGhmTURFNU1qVTFMMjFoYm1sbVpYTjBMbTF3WkE9PSZrMT1PV001TWpFMk1tSXlNemN3T1RZMU16WTRPR0UwTnpGaVpXTXdZMll4T1dJPSZrMj1NalUxT0RaaE5XTmhNakE0TkRka05qZzBOVGM1WTJObE1HTXlaV05oWTJNPQ==', calidad: '1080p' },
            'Ziggo Sport Voetbal NL': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlrWVMxa05ETTJNak0yTWpJd01ERXdZamc0TURBd01UQXpNRE13TURBd01EQXdNREF3TURBd01EQTBMbWxrTG1Oa2JpNTFjR05pY205aFpHSmhibVF1WTI5dEwzZHdMM2R3TFc5aVl6RXRiR2wyWlMxdWJDMXdjbTlrTG5CeWIyUXVZMlJ1TG1SdFpITmtjQzVqYjIwdlpHRnphQzlPVEY4d01EQXdPVFZmTURFNU16Y3hMMjFoYm1sbVpYTjBMbTF3WkE9PSZrMT1NalUxT0RaaE5XTmhNakE0TkRka05qZzBOVGM1WTJObE1HTXlaV05oWTJNPSZrMj1PV001TWpFMk1tSXlNemN3T1RZMU16WTRPR0UwTnpGaVpXTXdZMll4T1dJPQ==', calidad: '1080p' },
            'GolPlay ES': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xsaWJyZW9ubGluZS5wZS9jbGFycC9nb2xwbGF5ZXMucGhw', calidad: 'SD' },
            'Club RTL BE': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTl2Y21sbmFXNHlMWEowYkdKbExteHBkbVV1Tm1Oc2IzVmtMbVp5TDNCdmIyeGZlalpvTW04MmNXUXZZMngxWW5KMGJDOXlkR3hpWlhOa0wyUmhjMmhmYzJodmNuUmZZMlZ1WXpFd1gyTnNkV0p5ZEd3dmFXNWtaWGd1YlhCayZrMT1ZalV6TXpFMlpqTXlabU01TTJJMU1XRTJNV0poTm1aa1pqQmlZMlUyWXpFJmsyPVpEYzFNbVEyTmpnME0yRTBPR0UyWm1Wa05qUmxaV1E0WmpnM1lXUmpNMlU=', calidad: '1080p' },
            'Sky Sports Calcio IT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXpNREl0YVhRdFpHRnphREV0Y0hKa0xXeHNMbU5rYmpFekxuTnJlV05rY0M1amIyMHZNREUyWVM4ek1USXdPUzlHU0VRdmMydDVjM0J2Y25SelpYSnBaV0V2YldGemRHVnlMbTF3WkE9PSZrMT1NREF6Tm1VMVpEQmxPRGhrWm1Jd09EZG1NVGM1TVdSaE5qRTFNR05sWkRrPSZrMj1NR0pqTmpVelpEZ3pNRGd6TjJSalpXSXhNMkprTVRjeE5qbG1NR1k0WlRJPQ==', calidad: '1080p' },
            'Play Sports 1 BE': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlrWTJVdFlXc3RiR2wyWlhkM1pHRjZiaTVoYTJGdFlXbDZaV1F1Ym1WMEwyUmhjMmhrY20wdlpHRjZiaTFzYVc1bFlYSXRNRFE0TDNOMGNtVmhiUzV0Y0dRJmsxPU9ESm1PR1V5WVRFM1pHRmpORFJqTUdFeE9HWTJOakEwTnprek5EbGpOVGsmazI9TVdJeE5EUm1Oek5sTm1abFptVTVNV05rTURWbU9EVXdaVEppTlRnNVpEQQ==', calidad: '1080p' },
            'Play Sports 2 BE': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlrWTJVdFlXc3RiR2wyWlhkM1pHRjZiaTVoYTJGdFlXbDZaV1F1Ym1WMEwyUmhjMmhrY20wdlpHRjZiaTFzYVc1bFlYSXRNRFV5TDNOMGNtVmhiUzV0Y0dRJmsxPU9ESm1PR1V5WVRFM1pHRmpORFJqTUdFeE9HWTJOakEwTnprek5EbGpOVGsmazI9TVdJeE5EUm1Oek5sTm1abFptVTVNV05rTURWbU9EVXdaVEppTlRnNVpEQQ==', calidad: '1080p' },
            'TUDN US (VPN/US/MX)': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXVjM1IyWVdOa2JpNXpjR1ZqZEhKMWJTNWpiMjB2VEVsV1JTOHhNVE14TDJSaGMyZ3ZZMlZ1WXk5VVZVUk9WVWhmT0RJNE15OXRZVzVwWm1WemRDNXRjR1E9JmsxPU9EVmpPRGsxTm1JeU1EZGpORFJoTmprelpEZzVPVGcwT0RBell6a3dPR0k9JmsyPU9HUTRabVl5TVdNME5qUTFNRFpsWmpNNU5qTTFObVJrTnpZeFpqVmpZMlE9', calidad: '1080p' },
            'Sky Sports Main Event GB': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXdNRGN0WjJJdFpHRnphREV0Y0hKa0xXTm1MbU5rYmk1emEzbGpaSEF1WTI5dEx6QXhObUV2UTI5dWRHVnVkQzlFUVZOSVh6QXdNMTl6WkM5TWFYWmxMMk5vWVc1dVpXd29jMnQ1YzNCdmNuUnpiV0ZwYm1WMlpXNTBLUzl0WVc1cFptVnpkRjl6WkM1dGNHUT0mazE9TURBd05UTmpZbUZoTkRNd01XTmpPVGs1TTJVMk9HWmtOR0kyWTJVMk56RT0mazI9TW1FNFpUQXdPRFU1TjJFME5UWXdNbVJqTkdZek9XWXdObVV4TVRrMk16QT0=', calidad: '1080p' },
            'TNT Sports 1 GB': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXdNVFF0YVdVdFpHRnphREV0Y0hKa0xXTm1MbU5rYmk1emEzbGpaSEF1WTI5dEx6QXhObUV2UTI5dWRHVnVkQzlFUVZOSVh6QXdNMTlvWkM5TWFYWmxMMk5vWVc1dVpXd29kRzUwYzNCdmNuUXhLUzl0WVc1cFptVnpkRjlvWkM1dGNHUT0mazE9TURBd05UZzRPR0kxTURObE9XTmhNbUpqTkRsa016VmlZVEF3WkdZeVpEaz0mazI9TnpSak1tUm1PRFUzWkRKbVlXSTNZbUZqTVROaE5qSTNaR0kyTkRJMFptVT0=', calidad: '1080p' },
            'TNT Sports 2 GB': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXdNell0YVdVdFpHRnphREV0Y0hKa0xXRnJMbU5rYmk1emEzbGpaSEF1WTI5dEx6QXhObUV2UTI5dWRHVnVkQzlFUVZOSVh6QXdNMTlvWkM5TWFYWmxMMk5vWVc1dVpXd29kRzUwTW5Od2IzSjBOVEFwTDIxaGJtbG1aWE4wWDJoa0xtMXdaQSZrMT1NREF3TXpSaFlqUmxZekptWW1Zd01UZzBPR0ZqTlRFMU4yRXpNVFJrTkRNJmsyPU9USmtNV0k1T0dFNU1XWXpaak01TWpnMVpUUmlOak14TlRZd09HSXpaV1U=', calidad: '1080p' },
            'TNT Sports 3 GB': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXdNVEl0YVdVdFpHRnphREV0Y0hKa0xXTm1MbU5rYmk1emEzbGpaSEF1WTI5dEx6QXhObUV2UTI5dWRHVnVkQzlFUVZOSVh6QXdNMTlvWkM5TWFYWmxMMk5vWVc1dVpXd29kRzUwYzNCdmNuUXpLUzl0WVc1cFptVnpkRjlvWkM1dGNHUT0mazE9TURBd016TmxZVFZtT0RZelpEUXhOV0l5TWpRek16Y3haak00T0RjMk1EUT0mazI9TXpVeU0yRmpNMkk0TmpNek5qTTBOVFl6WXpFeE1tRTFObUkxTTJNM09UZz0=', calidad: '1080p' },
            'TNT Sports 4 GB': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXdNemN0YVdVdFpHRnphREV0Y0hKa0xXRnJMbU5rYmk1emEzbGpaSEF1WTI5dEx6QXhObUV2UTI5dWRHVnVkQzlFUVZOSVh6QXdNMTlvWkM5TWFYWmxMMk5vWVc1dVpXd29kRzUwTkhOd2IzSjBOVEFwTDIxaGJtbG1aWE4wWDJoa0xtMXdaQSZrMT1NREF3TXpJek16Vm1NVGcyTUdNNFkyWXdaalZsTkRVeE1HTTVOakU1WkRrJmsyPVptRXdPRE13WlRZeVlUTXdPR1F3TUdRd09XRTVNVFprWmpZMlkyTmtNV0U=', calidad: '1080p' },
            'Match Football 1 RU': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTkyYVdSbGJ5NWlaV1ZzYVc1bExuUjJMMnhwZG1VdlpDOWphR0Z1Ym1Wc016RTVMbWx6Yld3dmJXRnVhV1psYzNRdGMzUmlMbTF3WkE9PSZrMT1aR0pqWlRBeVltRXdORGRoTmpZek1UWXlZMll3TVdFeE0yWTNNbVpoWkdFPSZrMj1NREV5TWpnME1qZGhNREZqWkRSbU5XSXhNV1ExT0daaU1tWXdaamN3Wm1VPQ==', calidad: '1080p' },
            'Match Football 2 RU': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTkyYVdSbGJ5NWlaV1ZzYVc1bExuUjJMMnhwZG1VdlpDOWphR0Z1Ym1Wc016SXdMbWx6Yld3dmJXRnVhV1psYzNRdGMzUmlMbTF3WkE9PSZrMT1OR1ZsT1RKa1lqVm1aV00yTkdFM05UbG1aVEJsTkRObU5UUXdNV1ZoTWpBPSZrMj1PRGRqWldObFpHUTNPR0UxTVRnMk5XRmpaV00zWkdObU1HVmpZbUkzWmpZPQ==', calidad: '1080p' },
            'Match Football 3 RU': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTkyYVdSbGJ5NWlaV1ZzYVc1bExuUjJMMnhwZG1VdlpDOWphR0Z1Ym1Wc016SXhMbWx6Yld3dmJXRnVhV1psYzNRdGMzUmlMbTF3WkE9PSZrMT1OV0ZtTlRRM1lXVXlaR1ZsTURNeVlqbG1NR0U0WkRFMk5XSXdNMlJqTXpjPSZrMj1ObU00TkRCbU5USXpZemMzTTJZNU56azBPVFl5TWpoa09HSTBOR013TWpnPQ==', calidad: '1080p' },
            'SSC Sport 1 SA': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9mdXRib2xwbGF5dHZoZC5jb20ucGhwP3VybD1hSFIwY0hNNkx5OXpjMk10TVMxdmJpMXdjbVZ0TFdGckxtRnJZVzFoYVhwbFpDNXVaWFF2YjNWMEwzWXhMMlZqT1RNNE9UVTNaR0V5T0RRNU9EYzVaakJqWm1Gak4yVXpNRGxtWmpNNEwybHVaR1Y0TG0xd1pBPT0mazE9WlRjMllXVXhOMlE0TmpFMU5EWmlaVGxqTWpNNFpUWTFPREkxTURsak1tTT0mazI9WkdVeFlUa3haVEl6TURaaVpqZzBOREl5TXpaaE9EQTBOemRtTlRJMlpURT0=', calidad: '1080p' },
            'SSC Sport Extra 1 SA': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9mdXRib2xwbGF5dHZoZC5jb20ucGhwP3VybD1hSFIwY0hNNkx5OXpjMk10WlhoMGNtRXhMVzl1TFhCeVpXMHRZM2N0WVdzdVlXdGhiV0ZwZW1Wa0xtNWxkQzl2ZFhRdmRqRXZaRE13T1dGak9UaGlPREl5TkRJMVpEazBNelZqWTJFMk5UUXlNVEUwT1RndmFXNWtaWGd1YlhCayZrMT1NR0ptTldFek1qZzJPREl5TkdFMlpqbG1NMkUzTkRsaE9XVmhNakJsWWpJPSZrMj1NR0ZqWlRjME9XTTVOemt6TW1GaE5EUTBNelJrWVROaE9EaGpNV1ZsTmprPQ==', calidad: '1080p' },
            'SSC Sport Extra 2 SA': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9mdXRib2xwbGF5dHZoZC5jb20ucGhwP3VybD1hSFIwY0hNNkx5OXpjMk10WlhoMGNtRXlMVzl1TFhCeVpXMHRZV3N1WVd0aGJXRnBlbVZrTG01bGRDOXZkWFF2ZGpFdllUVXlOV00wTkdReE5USm1OR1F5TXpoaFlUSXhZV1kzTlRrME5XVXlPV012YVc1a1pYZ3ViWEJrJmsxPVptTTVPR0poWmpVek1HRmpORGxoWldFMk1HRTNZbVkxTURreU9XRmhPVEU9JmsyPVpqaGpOREEzTWpKaVlqWmhNR05tT0RJeU5UZzROall4TnpRd1lUQTRZbUk9', calidad: '1080p' },
            'Matchtv RU': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTluY0cwdGJXRjBZMmgwZGkxc2FYWmxMVzFsWjJGbWIyNHlMbTFsWkdsaGRtbDBjbWx1WVM1eWRTOWtZWE5vY0Mxc2FYWmxaakV2YldGMFkyaDBkaTlwYm1SbGVDNXRjR1E9JmsxPU9UVmpOek5pWkRFNVlqRTFaakF3T0dOak5UTmlNR016TlRCbFlXVTRPV0U9JmsyPVkySXpOREprTW1Vd05XSmpNV1F3WldRNVpXWTFabVUyTVRSaE5URXlZMkk9', calidad: '1080p' },
            'Sky Sports Uno IT': { link: '/eventos.html?r=aHR0cHM6Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTlzYVc1bFlYSXpNREV0YVhRdFpHRnphREV0Y0hKa0xXRnJaekF1WTJSdU1UTXVjMnQ1WTJSd0xtTnZiUzh3TVRaaEx6TXhNREl6TDBaSVJDOXphM2x6Y0c5eWRIVnVieTl0WVhOMFpYSmZjM1JsY21WdkxtMXdaQT09JmsxPU1EQXpOakkwTlRKbFpERXdNakF3TUdOalpXRTJOR016TVRFNU1qRmtZekk9JmsyPU1ESm1NamRpWkRaallXRmlOell6TTJRek1EZ3pZamswWkRNNU5UaGlNV009', calidad: '1080p' },
            'MTV Urheilu 1 FI': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTl0ZEhZdFl5MXNhWFpsZFhOd0xXSXVZV3RoYldGcGVtVmtMbTVsZEM5c2FYWmxMMVJGVEVsQlgwMUJXRk5RVDFKVU1TOVVSVXhKUVY5TlFWaFRVRTlTVkRFdWFYTnRiQzlOUVZoVFVFOVNWREV1YlhCayZrMT1OV05tTnpJMVpXUTNZekpoTkdGallqazVaRGt3TWpnMU5qUTJNRGhpTXpjPSZrMj1NR0k0TVRRM01tWTBNemsyTWpoak1tWXlNMk0yTXprM01qVmtNMlJpTTJV', calidad: '1080p' },
            'MTV Urheilu 2 FI': { link: '/eventos.html?r=Ly9rZW1pcmFzLm9uZS9ub21pcmVzLnBocD91cmw9YUhSMGNITTZMeTl0ZEhZdFl5MXNhWFpsZFhOd0xXSXVZV3RoYldGcGVtVmtMbTVsZEM5c2FYWmxMMVJGVEVsQlgwMUJXRk5RVDFKVU1pOVVSVXhKUVY5TlFWaFRVRTlTVkRJdWFYTnRiQzlOUVZoVFVFOVNWREl1YlhCayZrMT1OV05tTnpJMVpXUTNZekpoTkdGallqazVaRGt3TWpnMU5qUTJNRGhpTXpjJmsyPU1HSTRNVFEzTW1ZME16azJNamhqTW1ZeU0yTTJNemszTWpWa00yUmlNMlU=', calidad: '1080p' },
            'V Sports 1 NO': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1hSFIwY0hNNkx5OWhkM010WVhCd1pXRnlkSFl0WTJSdUxuSnBhM04wZGk1dWJ5OXlhV3R6ZEhZdk1UUTNOQzh5TDJSaGMyZ3ZWbWxoYzNCdmNuUmZNUzl0WVc1cFptVnpkQzV0Y0dRJmsxPU5EVTJNRGhsTmpReE5UUmlNVFUyWmpZNE9EUTVNalpqT0RkbU5tWXpaV00mazI9WXpZMllURm1aamMyTXpoa01HTmxNV1kzTWpsbU5UVTNNakl4WkdVMVpEYw==', calidad: '1080p' },
            'TV2 Sport 1 NO': { link: '/eventos.html?r=aHR0cHM6Ly9jbGFyb3ZpZGVvLnJhd2FzZXMuY29tL3Rlc3RpbmcucGhwP3VybD1hSFIwY0hNNkx5OWhkM010WVhCd1pXRnlkSFl0WTJSdUxuSnBhM04wZGk1dWJ5OXlhV3R6ZEhZdk1UUTJPQzh5TDJSaGMyZ3ZWRll5WDFOd2IzSjBYekV2YldGdWFXWmxjM1F1YlhCayZrMT1PR013TWpCalkyUTFaVGxrWXpkaU1HUTBNR1V3WkdFNU9UWmxNMlE1WXpjJmsyPVpqa3hZV1kwWkdGaU5UUmxPV013TWpka01qRm1OR1EzT0dGaVlqZGhOelU=', calidad: '1080p' },
            'Polsat Sport Premium 1 PL': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vY2FuYWxlcy9wb2xzYXRwcmVtaXVuMS5waHA=', calidad: '1080p' },
            'Polsat Sport Premium 2 PL': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vY2FuYWxlcy9wb2xzYXRwcmVtaXVuMi5waHA=', calidad: '1080p' },
            'Eleven Sports 1 PL': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vY2xhcnAvZWxldmVuc3BvcnRzMXBsLnBocA==', calidad: '1080p' },
            'Eleven Sports 2 PL': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vY2xhcnAvZWxldmVuc3BvcnRzMnBsLnBocA==', calidad: '1080p' },
            'Eleven Sports 3 PL': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vY2xhcnAvZWxldmVuc3BvcnRzM3BsLnBocA==', calidad: '1080p' },
            'Eleven Sports 4 PL': { link: '/eventos.html?r=aHR0cHM6Ly9mdXRib2xwbGF5dHZoZC5jb20vY2xhcnAvZWxldmVuc3BvcnRzNHBsLnBocA==', calidad: '1080p' }};

        Object.keys(enlaces).forEach(function (nombre) {
            $('.menu li.subitem1 a:contains(' + nombre + ')').each(function () {
                // Obtener la informaciÃƒÂ³n del enlace correspondiente
                var enlaceInfo = enlaces[nombre];

                // Eliminar el enlace existente y agregar el nuevo enlace con la calidad
                $(this).replaceWith('<a href="' + enlaceInfo.link + '" target="_blank">' + nombre + '<span>Calidad ' + enlaceInfo.calidad + '</span></a>');
            });
        });
    });
